let fs = require("fs")
const user= require("../models/users")
const file= require("../models/filesUser")

const controller ={
    index: (req,res)=> {res.send("Funciona")},
    login: (req,res)=> {res.render("./users/login",{styles: ["login"]})},
    register: (req,res)=> {res.render("./users/register", {styles: ["register"]})},
    save: (req,res)=> {
        req.body.files = req.files
        let userRegistred = user.create(req.body)

        return res.redirect("/users/login")
    }
}

module.exports= controller