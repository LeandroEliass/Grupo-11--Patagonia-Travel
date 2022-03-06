module.exports= function(sequelize, dataTypes){
    let alias = "nacionality";
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
        tableName: "nacionalities"
    }
const nacionality = sequelize.define(alias,cols,config);
nacionality.associate=function(models){
    nacionality.hasMany(models.user,{
        as: "users",
        foreingKey: "id_nacionality"
    })}
return nacionality
}