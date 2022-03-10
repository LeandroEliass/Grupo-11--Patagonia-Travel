module.exports= function(sequelize, dataTypes){
    let alias = "Room";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        room:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "rooms",
        underscored:true
    }
const room = sequelize.define(alias,cols,config);
room.associate=function(models){
    room.hasMany(models.Product,{
        as: "products",
        foreingKey: "room_id"
    })} 
return room
}