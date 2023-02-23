const express = require("express");
const cors = require("cors");
const routes = require('./routes/indexRoute');


//creating the server
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//This middleware is used for the routes
app.use("/olx",routes);

//Create database connection using sequelize and call all models

const db = require('./models');

db.sequelize.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log("server is running on the port http://localhost:5000");
    })
});