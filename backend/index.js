const express = require('express');
const cors = require('cors');
const ENV = require('dotenv').config();

const PORT = process.env.PORT || 8080;

//Database setup
const db = 'db here';


//Express Server
const app = express();
const server = require('http').Server(app);

//Middleware
app.use(cors());


//Routes defitions
const login = require('./Routes/login');

//Mount routes
app.use('/api/login', login(db))

//server start
server.listen(PORT, ()=>{
  console.log(`Serving you up a nice platter of db on port ${PORT}`);
});
