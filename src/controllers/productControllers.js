
const product = require("../models/products")
const file= require("../models/files")
let db = require("../database/models")
const sequelize = db.sequelize
const Op = db.Sequelize.Op


const controller ={
    products: (req,res)=>{ 
        // con sequelize
        db.Product.findAll({include:["category","image"]})
       .then(function(product){return res.render("./products/list",{product, styles:["list"]}) 
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
       let serviceAll=db.Service.findAll()
       let imageAll=db.Image.findAll()
      
       Promise.all([categoryAll, cityAll,bathAll,roomAll,serviceAll,imageAll])
        .then(function([category, city,bath,room,service,image]){
            return res.render("./products/productCreate",{category,city,bath,room,service,image, styles:["productCreate"]})
        })
        .catch(error=>res.send(error))
        /* res.render("./products/productCreate",{styles: ["productCreate"],
    product:product.all()}) */},
    save: (req,res)=> { 
        
        db.Image.create({
            url: req.files[0].filename
        })
        .then(function(image){
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
                price:req.body.price,
                image_id: image.id
            })
            .then(function(){
                return res.redirect("/products")})
        
                
        })
        
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
    edit: (req,res)=>{
        let categoryAll=db.Category.findAll()
       let cityAll=db.City.findAll()
       let bathAll=db.Bath.findAll()
       let roomAll=db.Room.findAll()
       let serviceAll=db.Service.findAll()
       let imageAll = db.Image.findAll()
       let productId= db.Product.findByPk(req.params.id,{
        include: ["services","room","category","bath","image","city"]
    })
       Promise.all([categoryAll, cityAll,bathAll,roomAll,serviceAll, imageAll,productId])
        
        
        .then(function([category, city,bath,room,service,image,product]){
            res.render("products/productUpdate",{category, city,bath,room,service,image,product:product,styles:["productCreate","footer","header"]})
        })
         .catch(error=>res.send(error))
         /* res.render("./products/productUpdate",{styles: ["productCreate","footer","header"],
            }) */},
    update: (req,res) => {

        db.Product.update({
            name: req.body.name,
            city_id:req.body.city_id,
            address:req.body.address,
            category_id:req.body.category_id,
            capacity:req.body.capacity,
            bath_id:req.body.bath_id,
            room_id: req.body.room_id,
            surface:req.body.surface,
            description:req.body.description,
            price:req.body.price,
            
        },{
            where:{
                id: req.params.id
            }
        })
        .then(function(product){
        return res.redirect("/products/"+ req.params.id + "/edit")})
                /* let updated= product.update(req.params.id, req.body);
                return res.redirect("/products/"+ updated.id) */
                .catch(error=>res.send(error))
            },
    delet: (req,res) =>{
            let productId = req.params.id;
            db.Product.destroy({
                where:{id: productId}, 
                force:true})
            .then(()=>{
                return res.redirect("/products")})
                /* res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {product})}) */
            .catch(error => res.send(error))
                /* product.delete(req.body.id)
                return res.redirect("/products") */
            }

    
}

module.exports= controller 