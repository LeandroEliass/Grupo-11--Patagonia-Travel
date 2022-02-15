const path = require("path");
const fs = require("fs");
const file  = require("./filesUser")
const bcrypt  = require("bcrypt")
const {body}= require("express-validator")

const model={
    file:path.resolve(__dirname,"../database","user.json"),
    read:()=> fs.readFileSync(model.file, "utf-8"),
    write: data=> fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    all: ()=> JSON.parse(model.read()),
    search: (prop, value)=> model.all().find(e=> e[prop] == value),
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        lastName: data.lastName,
        fechaNac: data.fechaNac,
        nacionalidad: data.nacionalidad,
        ciudad: data.ciudad,
        domicilio: data.domicilio,
        email: data.email,
        rEmail: data.rEmail,
        usuario: data.usuario,
        password: bcrypt.hashSync(data.password,10),
        isAdmin: data.email.includes("@patagoniatravel.com"),
        image: data.files.map(f=>file.create(f).id)
    }),
    create: data => {
        let all = model.all();
        let user= model.generate(data);
        all.push(user);
        model.write(all)
        return user
    },
    validate:[
        body("name").notEmpty().isLength({ min: 3, max:16}).withMessage("Debe ingresar un nombre (entre 3 y 16 caracteres)"),
        body("lastName").notEmpty().isLength({ min: 3, max:16}).withMessage("Debe ingresar un apellido (entre 3 y 16 caracteres)"),
        body("fechaNac").isDate().withMessage("Ingrese su fecha de nacimiento"),
        body("ciudad").notEmpty().isLength({ min: 3, max:16}).withMessage("Debe ingresar una ciudad (entre 3 y 16 caracteres)"),
        body("domicilio").notEmpty().isLength({ min: 3, max:16}).withMessage("Debe ingresar un domicilio (entre 3 y 16 caracteres)"),
        body("name").notEmpty().isLength({ min: 3, max:16}).withMessage("Debe ingresar un usuario (entre 3 y 16 caracteres)"),
        body("email").isEmail().withMessage("email incorrecto"),
        body("rEmail").isEmail().withMessage("email incorrecto"),
        body("password").isLength({ min: 5,max:16}).withMessage("La contraseña debe comprender entre 5 y 16 caracteres")],
}


module.exports= model;