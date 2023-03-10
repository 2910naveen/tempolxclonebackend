

module.exports = (sequelize,Sequelize) =>{
    const userModel = sequelize.define("usermodel",{
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        status:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return userModel;
};