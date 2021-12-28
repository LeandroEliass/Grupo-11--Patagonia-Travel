let controller ={
    products: (req,res)=>res.send("estoy funcionando"),
    productDetail: (req,res)=> {res.render("productDetail")},
    productCar: (req,res)=> {res.render("productCar")},
    
}

module.exports= controller