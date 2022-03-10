module.exports= function(sequelize, dataTypes){
    let alias = "User";
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
        nacionalityId:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cityId:{
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
        imageId:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config={
        timestamps:false,
        tableName: "users",
        underscored:true
    }
const user = sequelize.define(alias,cols,config);

user.associate=function(models){
    user.belongsTo(models.Nacionality,{
        as: "nacionality",
        foreingKey: "nacionalityId"
    })
    user.belongsTo(models.City,{
        as: "city",
        foreingKey: "cityId"
    })
    user.belongsTo(models.Image,{
        as: "image",
        foreingKey: "imageId"
    })

}
return user
}