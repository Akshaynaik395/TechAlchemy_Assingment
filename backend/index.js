const express=require ('express')
const bodyparser=require('body-parser')
var book_controllers=require('./controllers/books_controllers.js')
const {mongoose}=require("./db.js")
const cors=require('cors')
var isbn = require('node-isbn');


var app=express()
app.use(bodyparser.json())

app.use(cors({origin:"http://localhost:4200"}))

app.listen(3000,()=>console.log("Server started at port no 3000"))

app.use('/books',book_controllers);



