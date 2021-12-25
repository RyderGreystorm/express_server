const express = require('express')
const todoController= require('./controllers/todoController')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()
const app = express()
const url=process.env.DB_URI
const PORT = process.env.PORT

// ROOUTE APIs
app.use(express.json())
app.get('/todos', todoController.getAllTodo)
app.post('/todos',todoController.addTodo)
app.delete('/todos/:todoId',todoController.deleteTodo)
app.patch('/todos/:todoId',todoController.updateTodo)
// app.getbyId('/todos/:todoId', todoController.getTodoById)






//SERVER AND DATABASE CONNECTION
app.listen(PORT, ()=>{

    console.log("server is running at port 8080");
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology:true  

    })
    .then(function(){
        console.log("Database connected successfully.....................")
    })
    .catch(function(error){
        console.log('Database not connected!' , error.message)
    })
})