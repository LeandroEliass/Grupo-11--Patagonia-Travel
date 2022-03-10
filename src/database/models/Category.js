module.exports= function(sequelize, dataTypes){
    let alias = "Category";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED, 
            autoIncrement:true, 
            primaryKey:true
        },
        category:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "categories"
    }
const category = sequelize.define(alias,cols,config);
category.associate=function(models){
    category.hasMany(models.Product,{
        as: "products",
        foreingKey: "categoryId"
    })} 
return category
}