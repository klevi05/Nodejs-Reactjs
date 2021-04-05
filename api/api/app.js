//Required part
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config()

//Variable part
const app = express();
require('dotenv').config()
const dbname = 'library';
const client = new MongoClient(process.env.DB_NAME, { useUnifiedTopology: true })

app.use(express.json({
    limit: '50mb',
    parameterLimit: 100000
  }))
  app.use(express.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  }))

//App use
app.use(cors())

//app route
app.get('/get',async (req, res)=>{
    await client.connect();
    client.db(dbname).collection('library').find({}).toArray(function (err, result){
        if (err) throw err;
        res.end(JSON.stringify(result));
    })
    }
   )
app.post('/posts',async (req, res) => {
    var api = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    };
    await client.connect();
    client.db(dbname).collection('library').insertOne(api).then(() => {
        console.log('Succsess')
    }).catch((err)=> {
        console.log(err)
    })
});
//Starting server
try {
    app.listen(process.env.PORT,
        ()=>{
        console.log(`Started sucsessfuly at port ${process.env.PORT}`
        )}
    );
} catch (error) {
    ()=>{
        console.log(error
        )}
}
