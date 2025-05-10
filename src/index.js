
const express = require('express');
const app = express();
const brandRoutes = require('./routes/brand.routes');  

app.use(express.json()); 


app.use('/brands', brandRoutes);  


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
