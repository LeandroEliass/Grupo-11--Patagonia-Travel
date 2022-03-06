module.exports= function(sequelize, dataTypes){
    let alias = "service";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        country:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "services"
    }
const service = sequelize.define(alias,cols,config);
return service
}