const express = require('express');
const createError = require('http-errors');
const app = express();

const brandRoutes = require('./src/routes/brand.routes');

app.use(express.json());

// Подключение роутов
app.use('/api/brands', brandRoutes);

// 404 ошибка
app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
