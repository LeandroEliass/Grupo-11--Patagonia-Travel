const path = require("path");
const fs = require("fs");
const file  = require("./filesUser")
const bcrypt  = require("bcrypt")

const model={
    file:path.resolve(__dirname,"../database","user.json"),
    read:()=> fs.readFileSync(model.file, "utf-8"),
    write: data=> fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    all: ()=> JSON.parse(model.read()),
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        lastName: data.lastName,
        fechaNac: data.fechaNac,
        nacionalidad: data.nacionalidad,
        ciudad: data.ciudad,
        domicilio: data.domicilio,
        email: data.email,
        rEmail: data.rEmail,
        usuario: data.usuario,
        password: bcrypt.hashSync(data.password,10),
        isAdmin: data.email.includes("@patagoniatravels.com"),
        image: data.files.map(f=>file.create(f).id)
    }),
    create: data => {
        let all = model.all();
        let user= model.generate(data);
        all.push(user);
        model.write(all)
        return user
    }
}


module.exports= model;