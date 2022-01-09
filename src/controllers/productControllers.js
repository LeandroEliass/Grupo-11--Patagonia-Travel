let controller ={
    products: (req,res)=>res.send("estoy funcionando"),
    productDetail: (req,res)=> {res.render("./products/productDetail",{styles: ["productDetail"]})},
    productCar: (req,res)=> {res.render("./products/productCar",{styles: ["productCar"]})},
    productCreate: (req,res)=> {res.render("./products/productCreate",{styles: ["productCreate"]})},
    
}

module.exports= controller 