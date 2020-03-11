const express = require("express");
const app = express();
const hbs = require('hbs');
const hi = require("./hello");

hi()
app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// let indexRoute = require("./routes/index");
// app.use("/", indexRoute);
app.use("/", require("./routes/index"));
app.use("/", require("./routes/students"));
app.use("/", require("./routes/student-detail"));

app.listen(3000, ()=> {
    console.log("Server running on port", 3000);
})
