// load  ENV FILE CONFIG
require("dotenv").config()

// init express
const express = require('express')
const cors = require("cors")
const multer = require('multer') 
const Joi = require('joi')


const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload");
    },
    filename: (req,file,cb)=>{
        const nmFile =  Date.now() + file.originalname
        console.log(55555,nmFile)
        cb(null,nmFile)
    }
})

const fileFilter = (req, file, cb)=>{
if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
    cb(null, true);
} else {
    cb(null,false)
}}

// set port dari .env / ENV_PORT
const PORT = process.env.ENV_PORT
const URL = process.env.ENV_URL

// init variable express
var app = express()

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
// app use multer
app.use(multer({storage: filestorage, fileFilter:fileFilter}).single('images'));
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
const router = require("./api/v1/user/routes")
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

// MENDEFINISIKAN URL DEFAULT
const apiRouter = require(`${__dirname}/api/v1/routes`)
app.use(URL,apiRouter)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}${URL}`) //http://localhost:3000/api/v1
})
