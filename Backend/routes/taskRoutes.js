const express = require('express')
const router = express.Router();
const {createTask,getTask,getSingletask,updateTask,deleteTask} = require('../controllers/taskController')

router.post("/",createTask);
router.get("/",getTask);
router.get("/:id",getSingletask);
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)

module.exports = router