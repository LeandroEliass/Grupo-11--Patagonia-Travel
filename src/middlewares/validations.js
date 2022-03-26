const {body} = require("express-validator")
const path = require ('path');

module.exports=[
    body("name")
    .notEmpty()
    .isLength({ min: 2, max:16})
    .withMessage("Debe ingresar un nombre entre 3 y 16 caracteres"),

    body("lastName")
    .notEmpty()
    .isLength({ min: 2, max:16})
    .withMessage("Debe ingresar un Apellido entre 3 y 16 caracteres"),

    body("fechaNac")
    .notEmpty()
    .isDate()
    .withMessage("Ingrese su Fecha de Nacimiento"),

    body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debe ingresar un email correcto"),
    body("rEmail")
    .notEmpty()
    .isEmail()
    .withMessage("Debe repetir el email anterior"),
    body("password")
    .notEmpty()
    .isLength({ min: 8,max:16}).withMessage("La contraseña debe comprender entre 8 y 16 caracteres"),
    body("rPassword")
    .notEmpty()
    .isLength({ min: 8,max:16}).withMessage("La contraseña debe comprender entre 8 y 16 caracteres"),
    body("file")
    .custom((value, {req}) => {
   
       let file = req.files[0];
       let formatoPermitido = ['.jpg', '.png', '.jpeg', ".gif"]
        
       if(!file){
           throw new Error('Debes subir una imagen')
       } 
       else{
       
           let fileExtension =  path.extname(file.originalname)
   
           if(!formatoPermitido.includes(fileExtension)){
               throw new Error('Los formatos permitidos son jpg - png - jpeg - gif ')
           }
       
       }
       return true
   
    })
    
]

 
