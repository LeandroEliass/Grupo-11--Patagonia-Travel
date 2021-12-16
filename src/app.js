const express = require("express");
const path = require("path");
const app = express();

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'), () => {console.log("SERVIDOR CORRIENDO http://localhost:"+app.get('port'))})
app.use(express.static(path.resolve(__dirname, "../public")))

app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/index.html")))
app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/login.html")))
app.get("/register.html",(req,res)=>res.sendFile(path.resolve(__dirname,"../views/register.html")))