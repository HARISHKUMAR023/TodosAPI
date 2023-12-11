const express= require('express');
const todoController = require('../controllers/todo.controllers');
const router = express.Router();
router.get('/',todoController.getAllTodo);
router.post('/',todoController.addTodo);
module.exports=router;