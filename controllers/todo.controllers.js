
const todo = require('../models/todo.model');

async function getAllTodo(){
    let todo;
    try{
        const todo = await todo.getAllTodo();
           }
    catch(error){
        return next(error); 
    }
    res.json({
        todo: todo,

    })
}

async function addTodo(){
const todotext=req.body.text;
const todo = new Todo (todotext);
let insertedid ;
try{
   const result = await todo.save();
   insertedid = result.insertedId;
}catch(error){
    return next(error);

}
todo.id = insertedid.toString();
res.json({message:'todo added',createdTodo:todo});

}



function updateTodo(){

}
function deleteTodo(){

}  


module.exports = { getAllTodo, addTodo, updateTodo, deleteTodo }