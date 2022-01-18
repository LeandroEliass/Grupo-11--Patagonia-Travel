const { all } = require("express/lib/application")
const product = require("../models/products")

let controller ={
    products: (req,res)=>res.render("./products/list",{styles:["list"],
            products:product.all()}),
    productDetail: (req,res)=> {res.render("./products/productDetail",{styles: ["productDetail"]})},
    productCar: (req,res)=> {res.render("./products/productCar",{styles: ["productCar"]})},
    productCreate: (req,res)=> {res.render("./products/productCreate",{styles: ["productCreate"],
    product:product.all()})},
    save: (req,res)=> { 
     let created= product.create(req.body);
        return res.redirect("/products")
    },
    /* show: (req,res) => {
        let result = product.search("id", req.params.id)
        return  result ? res.render("products/productDetail",{
            style: ["productDetail"],
            title:"Producto | " + result.name,
            product: result 
        }) : res.render("error", {
            msg: "producto no encontrado"
        }) }, */

    
}

module.exports= controller 