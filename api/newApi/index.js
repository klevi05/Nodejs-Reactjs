const express = require('express');
const app = express();
const cors = require('cors')
const register = require('./routes/start')
const mongoose = require('mongoose');
require('dotenv').config();
//Starting the conection to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser : true, useUnifiedTopology: true } ,
    ()=>
    console.log("Connected succesfull")
);
//App use part 
app.use(cors());
app.use(express.json());
app.use('/user/', register);

app.listen(process.env.PORT, ()=>{
    console.log('Succses')
})