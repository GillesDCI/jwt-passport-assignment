const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true,
   useCreateIndex: true
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})




app.listen(3000, () => console.log('The webserver is running on port 3000'));