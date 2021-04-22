const express = require('express');
const app = express();
const cors = require('cors')
const register = require('./routes/start')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
//Starting the conection to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser : true, useUnifiedTopology: true } ,
    ()=>
    console.log("Connected succesfull")
);
//App use part 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/user/', register);

app.listen(process.env.PORT, ()=>{
    console.log('Succses')
})