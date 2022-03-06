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
    let exist =user.search("email", req.body)
    if (!errors.isEmpty()) {
           return res.render("./users/register",{
                errors: errors.mapped(),
                old: req.body 
            })}
    if(exist){
        return res.render("user/register ",{
            errors:{
                email:{
                    msg: "email is registerd"
                        }
                    }
                })
            }
        let userRegistred = user.create(req.body)
    
            return res.redirect("/users/login")
    }
}

module.exports= controller