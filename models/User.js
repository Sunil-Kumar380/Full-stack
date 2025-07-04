
const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');

const User=sequelize.define('User',{
  name:{
    type:DataTypes.STRING,
    allowNull:false
  
  },
  email:{
    type:DataTypes.STRING,
    validate:{
      isEmail:true
    }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role:{
    type:DataTypes.STRING,
   
    defaultValue:'user'
  }
});

module.exports=User;