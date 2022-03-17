const userModel = require("../models/users")
const db = require("../database/models")

const user=(req, res, next) =>{
    res.locals.logged = false;

    let emailCookie = req.cookies.userEmail;
    let userFromCookie = req.cookies



    if(req.session.user){
        res.locals.logged = true;
        res.locals.user = req.session.user
    }
    /* db.User.findOne({
        where:{
            email: req.cookies.user && req.cookies ? req.cookies.user : null,
        }})
    .then(users=>{
        let logeado = users;
   
    if(req.session && req.session.user ){
        logeado= req.session.user;
    }
    res.locals.user= logeado 
}) */
    next()

}
module.exports= user