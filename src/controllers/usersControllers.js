let controller ={
    index: (req,res)=> {res.send("Funciona")},
    login: (req,res)=> {res.render("./users/login")},
    register: (req,res)=> {res.render("./users/register")},
}

module.exports= controller