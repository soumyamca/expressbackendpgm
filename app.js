var express=require('express')
var app=express()
app.get('/home',(req,res)=>{
    res.send("hai,welcome to my home page")

})
app.get('/address',(req,res)=>{
    res.send("welcome to node.js")
})
app.get('/back',(req,res)=>{
    res.send("back to home page")
})
app.listen(3000,()=>{
    console.log("server started at  http://localhost:3000/home")
})