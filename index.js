const express = require("express");
const { engine } = require('express-handlebars');

const path = require("path");
const app = express();
const port = 3000;

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, "routes/blog.js")))


app.listen(port, ()=>{
    console.log(`Blog is running at http://localhost:${port}`);
})