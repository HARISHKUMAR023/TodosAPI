

const express = require("express")
const db = require ('./data/database');
const todoRoutes = require('./routes/todo.routes');

const app=express()
app.use('/todo', todoRoutes);
app.use(express.json())

app.use( (error,req,res,next)=>{
res.status(500).json({
    'message':'somting went worong'
})
db.initDb()
   .then(function(){
    app.listen(3000,()=>{
        console.log("the database connted")
    });
    
   })
   .catch(function(){
    console.log('connecting to the database failde!')
   })
})
