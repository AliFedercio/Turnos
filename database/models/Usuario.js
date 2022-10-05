module.exports = (sequelize, DataTypes)=>{
   
    const User = sequelize.define("user",{
        id:{
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type:DataTypes.STRING(50)
        },
        email:{
            type:DataTypes.STRING(90)
        }, 
        password:{
            type:DataTypes.STRING(25)
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type:DataTypes.DATE
        }

    },
    {
        createdAt: "created_at",
        updatedAt: "created_at"
    });


    return User;

};
   