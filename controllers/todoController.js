const res = require('express/lib/response');
const Todo = require('../models/Todos')


async function addTodo(req, res){
    try{
        const newTodo = await Todo.create(req.body);
        res.status(200).json({message: 'New user created successfully', newTodo});
        console.log('Hurrayy!!!Your POST request has been successful')
    }catch(error){
        res.status(400).json({message:'Cannot add new User'})
        console.log('Failed to add new user', error.message)
    }
 
}

async function deleteTodo(req,res){
    const todoId = req.params.todoId;
    try{ 
        await Todo.findByIdAndDelete(todoId);
        res.status(200).json({message: 'Todo deleted!'})
    }catch(error){
        res.status(400).json({message:"Todo not delted" });
        console.log("Failed to delete todo", error.message)
    }

}

async function updateTodo(req, res){
    const todoId = req.params.todoId;
    const body = req.body

try {
    await Todo.findByIdAndUpdate(todoId,body);
    res.status(200).json({message:'Todo Updated Sucessfuly'})
} catch (error) {
    console.log('Update failed', error.message);
    res.status(400).json({error:error.message})
}

}
async function getAllTodo(req,res){
    try{
const todos = await Todo.find();
res.status(200).json(todos);
console.log('Hurrayy!!!Your GET request has been successful')

    }catch(error){
        res.status(400).json({message:"failed to get Todos"});
        console.log('Failed to get all todos', error.message)
    }
}

// async function getTodoById(req,res){
//     const todoId = req.params.todoId;
//     const body = req.body;
// }try {
//     await Todo.findById(body,todoId);
//     res.status(200).json({message:"here is your todo with id: "+todoId+""})
// } catch (error) {
    
// }



module.exports={addTodo,deleteTodo,updateTodo,getAllTodo}