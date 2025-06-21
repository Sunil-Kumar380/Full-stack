const {Sequelize}=require('sequelize');
require('dotenv').config();
const db=new Sequelize(process.env.MYSQL_DATABASE,process.env.MYSQLUSER,process.env.MYSQL_ROOT_PASSWORD,{
    host:process.env.MYSQLHOST,
    dialect:mysql
})

module.exports=db;
