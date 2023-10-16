const express = require("express");
// var mysql = require('mysql2');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3005;

// app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config({path: './.env'});
// const Sequelize = require("sequelize");

const bodyParser = require("body-parser"); 
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:false}));



// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))



module.exports = {app};
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});



