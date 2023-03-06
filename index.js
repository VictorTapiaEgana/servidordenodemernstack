const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const { mongoose } = require('./database')

const port = process.env.PORT || 3001;
// app.use(PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/task',require('../server/routes/task.routes'));
//Static Files
//   app.use(express.static(path.join(__dirname, '..')));

//Starting Server
app.listen(port,()=>{
    console.log(`Servidor en Puerto ${ port }`) ;
});