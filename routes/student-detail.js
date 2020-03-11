const express = require("express");
const app = express();

app.get("/student-detail/:student", (req,res)=>{
    
    let theStudent = studentData.filter(
        (student)=> student.firstname ===  req.params.student
    )[0]

    res.render("student-detail", {student: theStudent});
})

module.exports = app;