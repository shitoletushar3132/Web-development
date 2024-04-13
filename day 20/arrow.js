const sum = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {
  return Math.pow(n, 3);
};

const pow = (a, b) => {
  return a ** b;
};

const mul = (a, b) => a * b; //implicit return;

// setTime out
console.log("hi setTime!");
// setTimeout(() => {
//   console.log("pdea's clg");
// }, 4000);

let id= setInterval(()=>{
    console.log("hello guys");
},4000);
console.log("welcome");





