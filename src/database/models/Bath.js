module.exports= function(sequelize, dataTypes){
    let alias = "bath";
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
        tableName: "baths"
    }
const bath = sequelize.define(alias,cols,config);
/* bath.associate=function(models){
bath.hasMany(models.product,{
    as: "products",
    foreingKey: "id_bath"
})} */
return bath
}