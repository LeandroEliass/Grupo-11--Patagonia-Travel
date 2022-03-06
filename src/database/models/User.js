module.exports= function(sequelize, dataTypes){
    let alias = "user";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        date_birth:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_nacionality:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_city:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        admin:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_image:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "users"
    }
const user = sequelize.define(alias,cols,config);

user.associate=function(models){
    user.belongsTo(models.nacionality,{
        as: "nacionality",
        foreingKey: "id_nacionality"
    })
    user.belongsTo(models.City,{
        as: "city",
        foreingKey: "id_city"
    })
    user.belongsTo(models.image,{
        as: "image",
        foreingKey: "id_image"
    })

}
return user
}