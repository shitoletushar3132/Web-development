const express = require("express");
const path = require('path');
const app = express();


const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



let todo = ['Swimming','study']
let tags = ['Habbit','success']

app.get("/",(req,res)=>{
    res.send({todo,tags});
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});