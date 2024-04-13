// let form = document.querySelector("form");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     // let inp = document.querySelector("input");
//     // console.log(inp);
// });


// let user= document.querySelector("input");

// user.addEventListener("change",function(){
//     console.log("input change");
//     console.log("final value",user.value);
// })

let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})