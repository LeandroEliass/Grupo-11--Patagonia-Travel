let fs = require("fs")
const product = require("../models/products")
const file= require("../models/files")

const controller ={
    products: (req,res)=>res.render("./products/list",{styles:["list"],
            products:product.all().map(p=> Object({...p, image: file.search("id", p.image)}))}),
    productDetail: (req,res)=> {res.render("./products/productDetail",{styles: ["productDetail"],
     /* products:product.all().map(p=> Object({...p, image: file.search("id", p.image)})) */})},
    productCar: (req,res)=> {res.render("./products/productCar",{styles: ["productCar"]})},
    productCreate: (req,res)=> {res.render("./products/productCreate",{styles: ["productCreate"],
    product:product.all()})},
    save: (req,res)=> { 
        req.body.files = req.files;
        let created= product.create(req.body);
        return res.redirect("/products")
    },
    show: (req,res) => {
        let result = product.search("id", req.params.id)
        let productShow=  Object({...result, image: file.search("id", result.image)})
        let image = productShow.image.url
       
        return  result ? res.render("products/productDetail",{
            styles: ["productDetail"],
            product: productShow ,
            imagen: image
        }) : res.send("error, producto no encontrado"
        ) }, 
    update: (req,res)=>{res.render("./products/productUpdate",{styles: ["productCreate","footer","header"],
            product: product.search("id", req.params.id)})},
    modify: (req,res) => {
                let updated= product.update(req.params.id, req.body);
                return res.redirect("/products/"+ updated.id)
            },
    delet: (req,res)=>{
                product.delete(req.body.id)
                return res.redirect("/products")
            }

    
}

module.exports= controller 