const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
require('dotenv').config();


const mongodb_connect = process.env.MONGODB_CONNECT;
const app = express();


// middleware
app.use(express.json());
// app.use(express.urlencoded({extended: false}));



app.get('/', (req, res) => {
  res.send("Hello from Node API Backend Updated");
});



// routes
app.use('/api/products', productRoute);





mongoose.connect(mongodb_connect)
  .then(() => {
    console.log('Connected to Database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => console.log('Connection failed'));





