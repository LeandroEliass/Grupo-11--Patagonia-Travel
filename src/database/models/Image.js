module.exports= function(sequelize, dataTypes){
    let alias = "Image";
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
        tableName: "images",
        underscored:true
    }
const image = sequelize.define(alias,cols,config);
image.associate=function(models){
    image.hasMany(models.User,{
        as: "users",
        foreingKey: "id_image"
    })
    image.hasMany(models.Product,{
            as: "products",
            foreingKey: "id_image"
        })}
return image
}