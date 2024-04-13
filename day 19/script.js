function hello() {
  console.log("hello");
}

function printclg() {
  console.log("pdea");
}
// printclg(); //Calling function

function print1to5() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

// print1to5();

function printPoem() {
  console.log("Twinkle Twinkle, little star");
}

// printPoem();

function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

function printName(name) {
  console.log("name : ", name);
}

function printInfo(name, age) {
  console.log("name : ", name);
  console.log("age :", age);
}

function sum(a, b) {
  console.log(a + b);
}

function avg(a, b, c) {
  console.log((a + b + c) / 3);
}

function tablePrint(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

function avgReturn(a, b, c) {
  return (a + b + c) / 3;
}

function sumReturn(a, b) {
  return a + b;
}

function isAdult(age)
{
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
}

function nSum(n){
    let total = 0
    for(let i=0; i<=n; i++){
        total += i;
    }
    return total;
}

function concatString(arr){
    let conca = "";
    for(let i=0; i<arr.length; i++){
        conca = conca.concat(arr[i]);
    }
    return conca;
}
str = ['hi','hello','namskar','namaste'];
res = concatString(str);


// function expression

const sumExpr = function(a,b){
    return a+b;
}


//higer order functions

let greet = function(){
    console.log("helllo");
}

let helloHighorder = function(func,n){
    for(let i=0; i<=n; i++){
        func();
    }
}


//methods


const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}


const calculatorShort = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}