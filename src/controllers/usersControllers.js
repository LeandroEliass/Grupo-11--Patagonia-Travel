let controller ={
    index: (req,res)=> {res.send("Funciona")},
    login: (req,res)=> {res.render("./users/login",{styles: ["login"]})},
    register: (req,res)=> {res.render("./users/register", {styles: ["register"]})},
}

module.exports= controller