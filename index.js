'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const express = require('express');
const createError = require('http-errors');
const routes = require('./src/routes');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './onlinestore/config/config'))[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs
  .readdirSync(path.join(__dirname, 'models'))
  .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js') 
  .forEach(file => {
    const model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Применяем ассоциации
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    runQueries(); 
  })
  .catch(error => {
    console.error('Unable to sync database:', error);
  });


async function runQueries() {
  try {
    if (!db.Category) {
      throw new Error('Category model not found!');
    }


    const allCategories = await db.Category.findAll();
    console.log('All categories:', allCategories);


    const categoriesWithIdGreaterThan = await db.Category.findAll({
      where: { id: { [Sequelize.Op.gt]: 2 } }, 
    });
    console.log('Categories with id > 2:', categoriesWithIdGreaterThan);


    const specificCategories = await db.Category.findAll({
      where: { name: ['Electronics', 'Plumbing'] }, 
    });
    console.log('Selected categories:', specificCategories);


    const idsToDelete = [1, 2];
    await db.Category.destroy({
      where: { id: idsToDelete },
    });
    console.log(`Categories with ids ${idsToDelete} have been deleted.`);


    await db.Category.update(
      { name: 'Updated Category' }, 
      { where: { id: 3 } } 
    );
    console.log('Category with id 3 has been updated.');

  } catch (error) {
    console.error('Error executing queries:', error);
  }
}

const app = express();


app.use(express.json());


app.use('/api', routes);


app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
