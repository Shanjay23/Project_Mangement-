const taskModel = require('../Models/TaskModel')
const mongoose = require('mongoose')

//To create a Task - POST
const createTask = async (req, res)=>{
    const { title, description} = req.body

    try{
        const task = await taskModel.create({title, description})
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    };
}

//To Get All Tasks -GET
const getTask = async (req, res)=>{
    try{
        const task = await taskModel.find({})
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    };
}

//To Get a Single Task - GET
const getSingletask = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'task not found'})
    }
    try{
        const singleTask = await taskModel.findById(id)
        res.status(200).json(singleTask)
    }catch(e){
        return res.status(404).json({error:e.message})
    }
};

//To Update A Task - PATCH

const updateTask = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'task not found'})
    }
    try{
        const task = await taskModel.findByIdAndUpdate({
            _id:id
        },
        {
            ...req.body
        })
        res.status(200).json(task);
    }catch(e){
        return res.status(404).json({error:e.message})
    }
};

//Delete task - DELETE
const deleteTask = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'task not found'})
    }
    try{
        const task = await taskModel.findByIdAndDelete(id)
        res.status(200).json(task);
    }catch(e){
        return res.status(404).json({error:e.message})
    }
};


module.exports = {createTask,getTask,getSingletask,updateTask,deleteTask}