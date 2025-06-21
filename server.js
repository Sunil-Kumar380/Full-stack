const express = require("express");
const sequelize=require('./config/db');
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
sequelize.sync().then(()=>{
  console.log('Database connected and synced');
  app.listen(8000,()=>{
    console.log('server is running at port number 8000');
  })
})



