module.exports= function(sequelize, dataTypes){
    let alias = "Product";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED, 
            autoIncrement:true, 
            primaryKey:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
       city_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        address:{
            type: dataTypes.STRING,
            allowNull: false
        }, 
        category_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        capacity:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        bath_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        room_id:{
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
        image_id:{
            type: dataTypes.INTEGER,
            
        } 
        
    };
    let config={
        timestamps:false,
        tableName: "products",
        underscored:true
    }
const Product = sequelize.define(alias,cols,config);

Product.associate=models=>{
    Product.belongsTo(models.City,{
        as: "city",
        foreingKey: "city_id"
    })
    Product.belongsTo(models.Category,{
        as: "category",
        foreingKey: "category_id"
    })
    
    Product.belongsTo(models.Bath,{
        as: "bath",
        foreingKey: "bathId"
    })
    Product.belongsTo(models.Room,{
        as: "room",
        foreingKey: "room_id"
    })
    Product.belongsTo(models.Image,{
        as: "image",
        foreingKey: "image_id"
    })
    Product.belongsToMany(models.Service,{
        as:"services",
        through: "services_products",
        timestamps:false,
        underscored:true
    }) }

 
return Product
}