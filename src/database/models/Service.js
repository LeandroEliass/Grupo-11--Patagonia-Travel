module.exports= function(sequelize, dataTypes){
    let alias = "Service";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        service:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "services",
        underscored:true
    }
const service = sequelize.define(alias,cols,config);

service.associate=function(models){
    service.belongsToMany(models.Product,{
        as:"products",
        through: "services_products",
        foreingKey: "service_id",
        otherKey:"product_id"
    })
}
return service
}