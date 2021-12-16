const express = require("express");
const path = require("path");
const app = express();

app.set("port",3000)
app.listen(app.get("port"),()=>console.log("Servidor corriendo"))

app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/index.html")))

app.use(express.static(path.resolve(__dirname, "../public")))
app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/login.html")))

app.get("/productDetail",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/productDetail.html")))
app.get("/productCar",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/productCar.html")))

