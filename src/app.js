const express = require("express");
const path = require("path");
const app = express();



app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo")})

app.use(express.static(path.resolve(__dirname, "../public")))

app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/index.html")))
app.get("/login.html",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/login.html")))
app.get("/register.html",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/register.html")))
app.get("/productDetail.html",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/productDetail.html")))
app.get("/productCar.html",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/productCar.html")))


