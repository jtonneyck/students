const express = require("express");
const app = express();
const hbs = require('hbs');
const studentData = require("./students.json");

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req,res)=>{
    res.render("home", {name: "Jurgen"});
})

app.get("/students", (req,res)=>{
    res.render("students", {students: studentData});
})
// http://localhost:3000/student-detail/neil
app.get("/student-detail/:student", (req,res)=>{
    
    let theStudent = studentData.filter(
        (student)=> student.firstname ===  req.params.student
    )[0]

    res.render("student-detail", {student: theStudent});
})

app.listen(3000, ()=> {
    console.log("Server running on port", 3000);
})
