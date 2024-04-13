// let btn = document.querySelectorAll("button");

// btn.onclick = function () {
//   console.log("button was clicked");
// };

// btn.onclick =()=>{
//     console.log("button pushed");
// }

// function sayHello() {
//   alert("hello");
// }

// function sayName(){
//     console.log("PDEA's Clg");
// }
// for (button of btn) {
//   button.onclick = sayHello;
//   button.onmouseenter = () => {
//     console.log("you entered on button");
//   };
// }

// let firstbtn = document.querySelector("#first");
// firstbtn.addEventListener("dblclick",function(){
//     console.log("you double clicked");
// })
// for(button of btn){
//     // button.addEventListener("click",sayHello);
//     button.addEventListener("click",sayName);
//     button.addEventListener("dblclick",function(){
//         console.log("YOu double click");
//     });
// }

// let p1 = document.querySelector('span');

// p1.addEventListener("click",function(){

//     p1.append(" this is an event listner");
//     // p1.remove();
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside a box");
// })

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector('p');


function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor ="blue";
}

btn.addEventListener('click',changeColor);
h1.addEventListener('click',changeColor);
h3.addEventListener('click',changeColor);
p.addEventListener('click',changeColor);