module.exports= function(sequelize, dataTypes){
    let alias = "image";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        url:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "images"
    }
const image = sequelize.define(alias,cols,config);
image.associate=function(models){
    image.hasMany(models.user,{
        as: "users",
        foreingKey: "id_image"
    })}
    /* image.hasMany(models.product,{
            as: "products",
            foreingKey: "id_image"
        })} */
return image
}