const express = require("express");
const mongoose = require("mongoose");
require(dotenv).config();
const port = process.env.port

app.use(express.json());

const dbconnect = mongoose();
async(err)=>{
    try{
        dbconnect(process.env.dblink)
      console.error(err.message);
    }
    catch{
       console.log("running sucessfully");
    }
}

dbconnect();




