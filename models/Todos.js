const mongoose= require('mongoose')

const todoScheema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    deadline: {
        type: String,
        require:true
    },
    isCompleted: {
        type: Boolean
    }
}),

 Todo = mongoose.model('todo', todoScheema);
module.exports=Todo