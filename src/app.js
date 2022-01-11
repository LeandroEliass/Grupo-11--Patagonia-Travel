const express = require("express");
const path = require("path");
const app = express();
const rutasMain = require("./routes/main")
const rutasProducts = require("./routes/product")
const rutasUsers = require("./routes/users")



app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo http://localhost:3000")})
app.set("view engine", "ejs" )
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.join(__dirname, "../public")))

app.use("/",rutasMain);
app.use("/products",rutasProducts);
app.use("/users",rutasUsers);






