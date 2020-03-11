const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.render("home", {name: "Jurgen"});
})

module.exports = app;