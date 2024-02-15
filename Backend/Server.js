const express = require ('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const taskRoutes =  require ('./routes/taskRoutes')
const cors = require('cors')
//Middleware
app.use((req,res,next)=>{
    console.log("path:   "+ req.path +"\nmethod:    "+ req.method)
    next()
});

//to deal with json files
app.use(express.json()) 
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// });

//DB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('DB connection success and Listening to port ' + process.env.PORT)
        });
    })
    .catch((error)=>console.log(error.message))
app.use('/api/tasks', taskRoutes)


