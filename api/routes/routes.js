const {Router} = require("express")
const mongoose = require("mongoose")
const TodoSchema = require("../models/TodoSchema")

const router = Router()

router.get("/items",async(req, res)=>{
    
    const userData = await TodoSchema.find()
    if(userData){
        res.json(userData)
    }
})

router.post("/item",async(req, res)=>{
    const {text} = req.body
    const userData = await TodoSchema.create({text})
    res.json(userData)
})


router.delete("/item/:id", async(req, res)=>{
   

    const {id: textID} = req.params
    const userData = await TodoSchema.findByIdAndDelete({_id: textID})
       

    if(!userData){
        res.json("not found")
    }
    res.json("deleted")
        
    
})

router.patch("/item/:id", async(req, res)=>{
   

    const {id: textID} = req.params
    const editData = req.body

    const userData = await TodoSchema.findOneAndUpdate({_id: textID}, {$set: req.body},{
        new:true,
       
    })
    if(userData){
        res.json({userData})
    }
        
    
})

module.exports = router

