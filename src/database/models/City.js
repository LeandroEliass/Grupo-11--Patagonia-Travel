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
        tableName: "cities"
    }
const City = sequelize.define(alias,cols,config);

City.associate=function(models){
City.hasMany(models.user,{
    as: "users",
    foreingKey: "id_city"
})
/* City.hasMany(models.Product,{
    as: "products",
    foreingKey: "city_id"
}) */
}

return City
}