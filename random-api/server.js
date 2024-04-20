const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const port = 8089;

function randomge(){
    return { data : Math.floor(Math.random() *100 )};
}
let numbers = {
    id:1,
    data : randomge() }

app.get('/random-number',(req,res)=>{
    res.json(randomge())
    // res.send("hello");
})

app.listen(port,()=>{
    console.log("server was running");
})