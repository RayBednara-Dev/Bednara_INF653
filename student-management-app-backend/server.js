const express = require('express');
const connectDB = require('./dbconfig');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use('/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});