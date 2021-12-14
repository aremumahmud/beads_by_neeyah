
var express = require('express')
var app = express()
app.use(express.static(path.join(__dirname,"public")))
app.listen()
app.get("/a",(req,res)=>{res.send("i am working")})
