module.exports= function(sequelize, dataTypes){
    let alias = "room";
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
        tableName: "rooms"
    }
const room = sequelize.define(alias,cols,config);
/* room.associate=function(models){
    room.hasMany(models.product,{
        as: "products",
        foreingKey: "id_room"
    })} */
return room
}