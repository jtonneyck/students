const express = require("express");
const app = express();
const studentData = require("../students.json");

app.get("/students", (req,res)=>{
    res.render("students", {students: studentData});
})

module.exports = app;
