const {body} = require("express-validator")
const db = require("../database/models");
const path = require ('path');

module.exports=[
    
    body("name")
    .isLength({ min: 5, max:16})
    .withMessage("Debe ingresar un nombre con mínimo 5 carácteres"),
    body("description")
    .isLength({ min: 20})
    .withMessage("La descripcíon es demasiado corta"),
    body("price")
    .notEmpty()
    .withMessage("Debe ingresar el precio en Pesos Argentinos"),
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

 
