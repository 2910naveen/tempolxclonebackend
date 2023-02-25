module.exports = (sequelize,Sequelize)=>{
    const mobilePhoneModel = sequelize.define("mobilePhoneModel",{
        brand:{
            type:Sequelize.STRING,
            allowNull:false
        },
        setaprice:{
            type:Sequelize.STRING,
            allowNull:false
        },
        adtitle:{
            type:Sequelize.STRING,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        uploadphoto:{
            type:Sequelize.STRING,
            allowNull:false
        },
        state:{
            type:Sequelize.STRING,
            allowNull:false
        },
        city:{
            type:Sequelize.STRING,
            allowNull:false
        },
        neighbourhood:{
            type:Sequelize.STRING,
            allowNull:false
        },
        username:{
            type:Sequelize.STRING,
            allowNull:false
        },
        mobilenumber:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
    return mobilePhoneModel;
};