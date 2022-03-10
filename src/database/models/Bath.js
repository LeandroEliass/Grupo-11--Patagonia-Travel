module.exports= function(sequelize, dataTypes){
    let alias = "Bath";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        bath:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "baths",
        underscored:true
    }
const bath = sequelize.define(alias,cols,config);
 bath.associate=function(models){
bath.hasMany(models.Product,{
    as: "products",
    foreingKey: "bathId"
})} 
return bath
}