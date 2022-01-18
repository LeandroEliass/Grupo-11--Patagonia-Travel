const path = require("path");
const fs  = require("fs");

const model={
file: path.resolve(__dirname,"../database","products.json"),
read: ()=> fs.readFileSync(model.file),
write: data=> fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
all: ()=> JSON.parse(model.read()),
generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        ciudad: data.ciudad,
        direccion: data.direccion,
        cp:parseInt(data.cp),
        categoria: data.categoria,
        cantHab: parseInt(data.cantHab),
        habitaciones: data.habitaciones,
        bañoPrivado: data.bañoPrivado ? true : false,
        bañoCompartido: data.bañoCompartido ? true : false,
        internet: data.internet ? true : false,
        television: data.television ? true : false,
        servicioHab: data.servicioHab ? true: false,
        electro: data.electro ? true: false,
        garage: data.garage ? true:false,
        description: data.description,
        superficie: parseInt(data.superficie),
        price: parseInt(data.price),
      }),                                                                            
create:data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
},
search: (field,value)=> model.all().find(e=>e[field]==value),
}
module.exports=model