
const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');

const Product=sequelize.define('Product',{
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    quantity:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    }
})

module.exports=Product