module.exports= function(sequelize, dataTypes){
    let alias = "City";
    let cols ={
        id:{
            type: dataTypes.BIGINT(10), 
            autoIncrement:true, 
            primaryKey:true
        },
        city:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "cities",
        underscored:true
    }
const City = sequelize.define(alias,cols,config);

City.associate=function(models){
City.hasMany(models.User,{
    as: "users",
    foreingKey: "city_id"
})
 City.hasMany(models.Product,{
    as: "products",
    foreingKey: "city_id"
}) 
}

return City
}