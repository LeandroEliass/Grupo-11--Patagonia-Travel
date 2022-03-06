module.exports= function(sequelize, dataTypes){
    let alias = "Product";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        /* id_city:{
            type: dataTypes.INTEGER,
            allowNull: false
        }, */
        address:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_category:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        capacity:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_bath:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_room:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        surface:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_image:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        city_id: dataTypes.BIGINT(10)
    };
    let config={
        timestamps:false,
        tableName: "products"
    }
const Product = sequelize.define(alias,cols,config);

Product.associate=models=>{
    /*Product.belongsTo(models.City,{
        as: "city",
        foreingKey: "city_id"
    })*/
    Product.belongsTo(models.Category,{
        as: "category",
        foreingKey: "id_category"
    })/*
    product.belongsTo(models.bath,{
        as: "bath",
        foreingKey: "id_bath"
    })
    product.belongsTo(models.room,{
        as: "room",
        foreingKey: "id_room"
    })
    product.belongsTo(models.image,{
        as: "image",
        foreingKey: "id_image"
    })
    product.belongsToMany(models.service,{
        as:"services",
        through: "services_products",
        foreingKey: "product_id",
        otherKey:"service_id"
    }) */

 } 
return Product
}