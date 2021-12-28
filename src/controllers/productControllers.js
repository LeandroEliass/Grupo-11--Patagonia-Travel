let controller ={
    products: (req,res)=>res.send("estoy funcionando"),
    productDetail: (req,res)=> {res.render("./products/productDetail")},
    productCar: (req,res)=> {res.render("./products/productCar")},
    
}

module.exports= controller