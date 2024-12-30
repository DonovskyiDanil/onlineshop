'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './onlinestore/config/config'))[env]; 
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Загружаем модели
fs
  .readdirSync(path.join(__dirname, 'models')) // Используем path.join для корректности пути
  .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach(file => {
    const model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Логируем загруженные модели для проверки
console.log('Loaded models:', Object.keys(db));

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
    runQueries(); // Запуск запросов после синхронизации базы данных
  })
  .catch(error => {
    console.error('Unable to sync database:', error);
  });

// Функция выполнения запросов
async function runQueries() {
  try {
    if (!db.Category) {
      throw new Error('Category model not found!');
    }

    // 1. Retrieve all data from the Categories table
    const allCategories = await db.Category.findAll();
    console.log('All categories:', allCategories);

    // 2. Retrieve data where id is greater than a certain value
    const categoriesWithIdGreaterThan = await db.Category.findAll({
      where: { id: { [Sequelize.Op.gt]: 2 } }, 
    });
    console.log('Categories with id > 2:', categoriesWithIdGreaterThan);

    // 3. Retrieve data for multiple specific values of an attribute
    const specificCategories = await db.Category.findAll({
      where: { name: ['Electronics', 'Plumbing'] }, 
    });
    console.log('Selected categories:', specificCategories);

    // 4. Delete data based on an array of values
    const idsToDelete = [1, 2];
    await db.Category.destroy({
      where: { id: idsToDelete },
    });
    console.log(`Categories with ids ${idsToDelete} have been deleted.`);

    // 5. Update data
    await db.Category.update(
      { name: 'Updated Category' }, 
      { where: { id: 3 } } 
    );
    console.log('Category with id 3 has been updated.');

  } catch (error) {
    console.error('Error executing queries:', error);
  }
}
