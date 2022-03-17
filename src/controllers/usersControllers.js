let fs = require("fs")
const userModel= require("../models/users")/* 
const file= require("../models/filesUser") */
const validator= require("express-validator")
const bcrypt= require("bcrypt")
const db = require("../database/models")
const sequelize = db.sequelize


const controller ={
    list: (req,res)=> {
        console.log(req.session)
        db.User.findAll({include: ["image"]})

        .then(function(user){return res.render("./users/list",{user:user, styles:["login"]})})},
        
    login: (req,res)=> {
        
        res.render("./users/login",{styles: ["login"]})},
    register: (req,res)=> {res.render("./users/register", {styles: ["register"]})},
    access: (req,res)=> {
        
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(users =>{
            let errors = validator.validationResult(req);
        
            if(!errors.isEmpty()){
                return res.render("./users/login",{
                    errors: errors.mapped(), styles:["login"] })}
            
            if(!users){ 
                        return res.render('./users/login',{styles: ["login"],
                             errors:{
                                 email:{
                                     msg: 'Email no está registrado',
                                 }
                             }
                         })
                     }
            if(!bcrypt.compareSync(req.body.password, users.password)){
                    return res.render('./users/login',
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
            
            req.session.user = users
                    
            return res.redirect("/users/profile")  

        })
        .catch(error=>res.send(error))
    },
    
    save: (req,res)=> {
     
        
   let errors = validator.validationResult(req);
   
   if(!errors.isEmpty()){
    return res.render("users/register",{styles: ["register"],
        errors: errors.mapped()})}

    let exist = user.search("email", req.body.email)
    if(exist){
    return res.render("users/register",{styles: ["register"],
        errors:{
            email:{
                msg: "email ya se encuentra registrado"
            }
        }
    })
}  
    
    /* let userRegistred = user.create(req.body)

    return res.redirect("/users/login")
    
   if (errors.errors.length > 0) {
           return res.render("./users/register",{styles: ["login"],
                errors: errors.mapped()})}

    let exist = user.search("email", req.body)
    if(exist){
        return res.render("user/register ",{styles: ["login"],
            errors:{
                email:{
                    msg: "email is registerd"
                        }
                    }
                })
            } */ 
           
        db.User.create({
                name:req.body.name,
                last_name:req.body.lastName,
                date_birth: req.body.fechaNac,
                admin: req.body.email.includes("@patagoniatravel") ? true : false,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
    
            })
            
            .then(function(){
                res.render("./users/login",{styles: ["login"]})
            }) 
            .catch(error=>res.send(error))
     
            
    },
    profile: (req,res) => {
        db.User.findByPk(req.session.user.id)

        .then(user=>{
            res.render("./users/profile", {
                user: user , styles: ["login"]})})

        .catch(error=>res.send(error))},

    edit: (req,res)=>{
        db.User.findByPk(req.params.id,{
            include: ["image"]
        })
        .then(function(user){
            return res.render("users/update",{styles: ["register", "footer","header"], user:user})
        })
        .catch(error=>res.send(error))

    },
    update: (req,res) => {
        db.User.update({
            name:req.body.name,
            last_name:req.body.lastName,
            date_birth: req.body.fechaNac,
            password: bcrypt.hashSync(req.body.password,10),
        },{
            where:{
                id: req.params.id
            }
        })
        .then(function(){
            return res.redirect("/users/profile")})
            .catch(error=>res.send(error))
    },
        

    logout: (req,res)=> {
        delete req.session.user
        res.cookie("email",null,{maxAge:-1})
        return res.redirect("/users/login")
    }
}

module.exports= controller