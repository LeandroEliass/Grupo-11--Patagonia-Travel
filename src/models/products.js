const path = require("path");
const fs  = require("fs");
const file=require("./files")

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
        categoria: data.categoria,
        cantHab: parseInt(data.cantHab),
        habitaciones: data.habitaciones,
        capacidad: parseInt(data.capacidad),
        bañoPrivado: data.bañoPrivado ? true : false,
        bañoCompartido: data.bañoCompartido ? true : false,
        internet: data.internet ? true : false,
        television: data.television ? true : false,
        servicioHab: data.servicioHab ? true: false,
        garage: data.garage ? true:false,
        climatizacion: data.climatizacion ? true:false,
        mascotas: data.mascotas ? true: false,
        description: data.description,
        superficie: parseInt(data.superficie),
        price: parseInt(data.price),
        image: data.files.map(f=>file.create(f).id)
      }),                                                                            
create:data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
},
search: (field,value)=> model.all().find(e=>e[field]==value),

update: (id,data) => {
        let all = model.all();
        let update = all.map(e => {
            if(e.id == id){
                e.name = data.name;
        e.ciudad= data.ciudad,
        e.direccion= data.direccion,
        e.categoria= data.categoria,
        e.cantHab= data.cantHab,
        e.habitaciones= data.habitaciones,
        e.capacidad= data.capacidad,
        e.bañoPrivado= data.bañoPrivado ? true : false,
        e.bañoCompartido= data.bañoCompartido ? true : false,
        e.internet= data.internet ? true : false,
        e.television= data.television ? true : false,
        e.servicioHab= data.servicioHab ? true : false,
        e.garage= data.garage ? true : false,
        e.climatizacion= data.climatizacion ? true : false,
        e.mascotas= data.mascotas ? true : false,
        e.description= data.description,
        e.superficie= data.superficie,
                e.price = data.price;
                e.image = data.image;
                
                return e
            } return e
        })
        model.write(update)
        let product = model.search("id", id);
        return product
    },
    delete: id=>{
        let deleted = model.all().filter(e=>e.id != id)
        model.write(deleted)
        return true
    }
}
module.exports=model