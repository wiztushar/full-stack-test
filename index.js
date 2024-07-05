const express=require('express')
const axios=require('axios')
const { createTodo,updateTodo, } = require('./validate');
const { todo } =require('./db');
const app=express();

app.use(express.json());
app.get('/',function(req,res){
    res.send('Hit this endpoint-> /todos to see existing data in Db  ')
})

//fetch  all todo from db
app.get('/todos',async function(req,res){

const todos=await todo.find({});
res.json({todos});



})
//post a new todo 
app.post('/todo',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Invalid input"
        })
        return;
        }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
    })
    res.json({
        
        message:"Todo created successfully"
    })

})
//Update a new todo
app.put('/completed',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Invalid input"
        })
        return;
    }
    await todo.findByIdAndUpdate(
        req.body.id,
        { title: req.body.title },
        { new: true } // This option returns the updated document
      );
    res.json({
        message:"Todo updated successfully"
        })
})

app.listen(3000,()=>{console.log('Server is up on 3000')})
