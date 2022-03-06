let fs = require("fs")
const user= require("../models/users")/* 
const file= require("../models/filesUser") */
const validator= require("express-validator")
const bcrypt= require("bcrypt")

const controller ={
    index: (req,res)=> {res.send("Funciona")},
    login: (req,res)=> {res.render("./users/login",{styles: ["login"]})},
    register: (req,res)=> {res.render("./users/register", {styles: ["register"]})},
    access: (req,res)=> {
        
        let errors = validator.validationResult(req);
        
        if(!errors.isEmpty()){
            return res.render("./users/login",{styles: ["login"],
                errors: errors.mapped() 
            })}
        let exist = user.search('email',req.body.email)

        if(!exist){ 
           return res.render('users/login',{styles: ["login"],
                errors:{
                    email:{
                        msg: 'Email no está registrado',
                    }
                }
            })
        }

        if(!bcrypt.compareSync(req.body.password, exist.password)){
            return res.render('users/login',
            {styles: ["login"],
                errors:{
                    password:{
                        msg: 'La Contraseña es incorrecta',
                    }
                }
            })
        }   

        if(req.body.remember){
            res.cookie('email',req.body.email,{maxAge:1000*60*60*24*30})
        }

        req.session.user = exist

        return res.redirect("/")

    },
    save: (req,res)=> {
        let errors = validator.validationResult(req)
        if (errors.isEmpty()) {
            req.body.files = req.files
            let userRegistred = user.create(req.body)
            console.log("todo");
            return res.redirect("/users/login",{styles: ["login"]})
        } else{
            res.render("./users/register",{styles: ["register"]},{
                errors: errors.array(),
                old: req.body
            })
            console.log("se detecto error");
            console.log(errors);
        }
    }
}

module.exports= controller