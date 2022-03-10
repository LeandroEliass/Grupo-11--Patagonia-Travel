module.exports= function(sequelize, dataTypes){
    let alias = "Nacionality";
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
        tableName: "nacionalities",
        underscored:true
    }
const nacionality = sequelize.define(alias,cols,config);
nacionality.associate=function(models){
    nacionality.hasMany(models.User,{
        as: "users",
        foreingKey: "nacionality_id"
    })}
return nacionality
}