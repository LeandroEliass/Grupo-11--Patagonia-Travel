let fs = require("fs")
const product = require("../models/products")
const file= require("../models/files")
let db = require("../database/models")
const sequelize = db.sequelize
const image = db.Image

const controller ={
    products: (req,res)=>{ 
        // con sequelize
        let productAll= db.Product.findAll()
        let imageAll= db.Image.findAll()
        let categoryAll= db.Category.findAll()

        Promise.all([productAll, imageAll])
       .then(function([product, image]){return res.render("./products/list",{product,image, styles:["list"]}) 
    })
    .catch(error=>res.send(error))}, 
    // usando json y modelos
    /* res.render("./products/list",{styles:["list"],
            products:product.all().map(p=> Object({...p, image: file.search("id", p.image)}))}), */
    productDetail: (req,res)=> {res.render("./products/productDetail",{styles: ["productDetail"],
     /* products:product.all().map(p=> Object({...p, image: file.search("id", p.image)})) */})},
    productCar: (req,res)=> {res.render("./products/productCar",{styles: ["productCar"]})},
    productCreate: (req,res)=> {
       
       let categoryAll=db.Category.findAll()
       let cityAll=db.City.findAll()
       let bathAll=db.Bath.findAll()
       let roomAll=db.Room.findAll()
       Promise.all([categoryAll, cityAll,bathAll,roomAll])
        .then(function([category, city,bath,room]){
            return res.render("./products/productCreate",{category,city,bath,room, styles:["productCreate"]})
        })
        .catch(error=>res.send(error))
        /* res.render("./products/productCreate",{styles: ["productCreate"],
    product:product.all()}) */},
    save: (req,res)=> { 
        
        db.Product.create({
            name: req.body.name,
            city_id:req.body.city_id,
            address:req.body.address,
            category_id:req.body.category_id,
            capacity:req.body.capacity,
            bath_id:req.body.bath_id,
            room_id: req.body.room_id,
            surface:req.body.surface,
            description:req.body.description,
            price:req.body.price
        })
        .then(function(){
        return res.redirect("/products")})

        .catch(error=>res.send(error))
        /* 
        req.body.files = req.files;
        let created= product.create(req.body);
        return res.redirect("/products") */
    },
    show: (req,res) => {
        // con sequelize
        db.Product.findByPk(req.params.id,{
            include: [{association:"services"},{association:"room"},{association:"category"},{association:"bath"},{association:"image"}]
        })
        .then(function(product){
            res.render("products/productDetail",{product:product,styles:["productDetail"]})
        })
        .catch(error=>res.send(error))
        // con json
       /*  let result = product.search("id", req.params.id)
        let productShow=  Object({...result, image: file.search("id", result.image)})
        let image = productShow.image.url
       
        return  result ? res.render("products/productDetail",{
            styles: ["productDetail"],
            product: productShow ,
            imagen: image
        }) : res.send("error, producto no encontrado"
        ) */ }, 
    update: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association:"services"},{association:"room"},{association:"category"},{association:"bath"},{association:"image"},{association:"city"}]
        })
        .then(function(product){
            res.render("products/productUpdate",{product:product,styles:["productCreate","footer","header"]})
        })
         .catch(error=>res.send(error))
         /* res.render("./products/productUpdate",{styles: ["productCreate","footer","header"],
            }) */},
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