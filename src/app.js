const express = require("express");
const path = require("path");
const app = express();
const session= require("express-session")
const method = require("method-override")
const cookie= require("cookie-parser")

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo http://localhost:3000")})
app.set("view engine", "ejs" )
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/upload",express.static(path.resolve(__dirname, "../upload")))
app.use(method("m"))
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use(session({secret:"patagonia", resave: true, saveUninitialized: false}))

const rutasMain = require("./routes/main")
const rutasProducts = require("./routes/product")
const rutasUsers = require("./routes/users")

const rutasFiles = require("./routes/files")/* 
const rutasFilesUser = require("./routes/filesUser") */


app.use("/",rutasMain);
app.use("/products",rutasProducts);
app.use("/users",rutasUsers);
app.use("/files", rutasFiles)
app.use(require("./middlewares/users"))/* 
app.use("/filesUser", rutasFilesUser) */






