/*

Express uses for 
1) request listing
2) parse the request 
3) request route
4) suitable respond sent
*/
// const express = require('express');
// const app = express();

// let port = 3000;

// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`)
// })


// it is used all
// app.use((req, res)=>{
    // res.send("this is a basic response");

    // res.send({
    //     name:'apple',
    //     color:'red'
    // });

    // res.send("<h1>Fruits</h1>");
// });


const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("hey i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}.</h1>`;
    res.send(htmlStr);
});

app.get('/search', (req, res) => {
    let {q}=(req.query);
    res.send(`search results for query : ${q}`);
});

// app.get('/apple',(req,res)=>{
//     res.send("you contacted apple path");
// })

// app.get('/orange',(req,res)=>{
//     res.send("you contacted orange path");
// })

// app.get('*', (req,res)=>{
//     res.send("this path does not exits")
// })

// app.post('/',(req,res)=>{
//     res.send("you sent a post request to root")
// })

