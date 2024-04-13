let age = 15;
// age >= 18 ? console.log("adult"):console.log("not adult");
// const expt = "papayas";
// switch (expt){
//     case 'orange':
//         console.log("orange");
//         break;
//     case 'papayas':
//         console.log("papayas");
//         break;
//     default:
//         console.log("no");
// }
// alert("hello");
// let name = prompt("enter a number : ");
// if(name % 5===0){
//     console.log(name,"it is multiple of 5");
// }else{
//     console.log(name,"not multile of 5");
// }
// let marks = prompt('enter a scores of student : ');
// if(marks <= 100 && marks >= 80){
//     console.log('your grade is : A');
// }else if(marks <= 89 && marks >= 70){
//     console.log("your grade is : B");
// }else if(marks <= 69 && marks >= 60){
//     console.log("your grade is : C");
// }else if(marks <= 59 && marks >= 50){
//     console.log("your grade is : D");
// }else{
//     console.log("your grade is : F");
//  }
// for(let i=0; i<=5000; i++){
//     console.log("tushar");
// }
// console.log("loop has ended");
// let n=9,sum=0;
// for(let i=1; i<=909; i++){
//    sum += i;
// }
// for(let k ='a'; k<='z';k++){
//     console.log(k);
// }
// console.log(sum);
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// let i=1;
// do{
//     console.log("apan clg");
//     i++;
// }while(i<=10);
// let str = 'tushar shitole';
// //for-of loop
// let size=0;
// for(let i of str){//iterator--
//     console.log(i);
//     size++;
// }
// console.log(size);
// //for-in loop
// let student = {
//     name : "tushar shitole",
//     age : 21,
//     cgpa : 8.9,
//     isPass : true
// }
// for(let i in student){
//     console.log('key = ',i , 'value = ',student[i]);
// }
// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);
//     }
//
// let gamenum = 3;
// let time = 0
// while(true){
//     let val = prompt('guess the number between 1 to 10 : ');
//     time++;
//     if(val==gamenum){
//         console.log("you want the match you guess number for ", time ,' times' );
//         break;
//     }
// }
// let str = 'varavand';
// let str2 = "tushar";
// console.log(str2.length);
// console.log(str2[5]);
//template literals
// let sen = `this is a template literal`;
// console.log(sen);
// let obj = {
//     item : 'pen',
//     price : 10
// };
// let op = `the cost of ${obj.item} is ${obj.price}`; //string interpolation
// console.log(op);
//string methods
// let s = 'tushar';
// console.log(s.toUpperCase());
// let str = '     my name is tushar     ';
// console.log(str.trim()); //remove space from front and end
// console.log(s.slice(0,3));
// console.log(s.concat(str));
// console.log(str.replace('tushar','vicky'));
// console.log(str.charAt(8));

// let fname = prompt("enter a your full name without spaces :");
// fname = fname.trim()
// let username = `@${fname}${fname.length}`;
// console.log('name is : ',fname);
// console.log('Your username will be : '+username );

// let marks = [323,32,3,2,3,23];
// console.log(marks);

// let heros = ['ironman','thor','capton','batman','antman'];

// for(let val of heros){
//     console.log(val);
// }

// let marks = [85,97,44,37,76,60];
// let total =0;
// for(let val of marks){
//     total += val;
// }
// console.log('avg : ',total/marks.length );

//array in methods

// let food = ['potato','apple','banana'];
// food.push("pineapple");
// food.pop();

// console.log(food.toString());

// let food1 = ['pineapple','coconut','mango'];

// let fooda = food.concat(food1);
// console.log(fooda);

//unshift for add the element at first
//shift for remove the element from first

//push & pop for last

// console.log(fooda.unshift('grapes'));

// console.log(fooda.slice(1,3));

// let  arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);// deleting 2 items from 2 and add 101 and 102

// arr.splice(2,0,1010);//adding at index 2

// arr.splice(3,1)//delete item at index 3

// arr.splice(3,1,101);

// let company = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// // company.shift();
// company.splice(2,1,'Ola');
// company.push("Amazon");

//functions

// function p(s){
//     console.log("calling ujjain & "+s);
// }
// p('omkareshwar');

// function sum(a,b){
//     return (a+b);
// }
// sum(3,3);

//arrow function

// const arrowsum = (a,b)=>{
//     return a*b;
// }

function count_vowels(str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    let ch = str[i];
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  return count;
}

const countval = (str) => {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    let ch = str[i];
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  return count;
};


//for each loop
let arr = [1,2,3,4,5];

// arr.forEach(function printval(val){
//     console.log(val);
// })

// arr.forEach(element => {
//     console.log(element);
// });

// arr.forEach(val =>{
//     console.log(val*val);
// })

// function calsq(val){
//     console.log(val*val);
// }

// arr.forEach(calsq);

// let newarr = arr.map(val =>{//map functions returns a new array
//     return val*2;
// })

// let new_arr = arr.filter(val => {
//     return val%2==0;//the filter functions gives array in return if condtion is true
// })

// let arr1 = [97,64,32,49,99,96,86];

// let new_arr = arr1.filter(val=>{
//     return val>90;
// })

// let n = prompt("Enter a number ");

// let arr2 =[];
// for(let i =0;i<=n;i++){
//     arr2[i]=i;
// }

// alert("tushar");

// document.body.childNodes[3].innerText="abcd";


//dom 

//selecting with id
// let heading = document.getElementsByClassName("heading")
// console.dir(heading);
// console.log(heading);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// let firstelem = document.querySelector("p");
// console.dir(firstelem);

// let allelem = document.querySelectorAll("p");
// allelem = "hello";
// console.dir(allelem);

// let firstel = document.querySelector("p");
// console.dir(firstel);

// let div = document.querySelector("div");
// console.dir(div);

// let h2_text = document.querySelector("h2");
// console.dir(h2_text.innerText);
// h2_text.innerText = h2_text.innerText + " from self";

let firstdiv = document.getElementById("firstdiv");


// if(firstdiv){
//   console.log("innerHtml(byID): " ,firstdiv);
//   firstdiv.innerHTML = "Updated content using ID!";
// }else{
//   console.error("Dive with Id 'firstDiv' not found");
// }

// const firstDivclass = document.querySelector(".box");

// console.log(firstDivclass);

// firstDivclass.style.color = 'rgb(100,0,0)';

// const heading = document.querySelector("h2");
// heading.style.color = "rgb(30,0,100)";

// for(let i=0; i<firstDivclass.length; i++){
//   { 
//     console.log("innerHtml (by class) : ", firstDivclass.innerHTML[i]);
//     firstDivclass[i].innerText="Updated content using class";
//   }
// }

// for(let i=0; i<divs.length; i++){
//     divs[i].innerText = `new unique value ${i+1}`;
// }

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");

// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// let div = document.querySelector("div");
// div.style.backgroundColor="aliceblue"
// div.style.fontSize = "26px";

// let newButton = document.createElement("button");
// newButton.innerText="click me";
// console.log(newButton);
 
// let div = document.querySelector("div");
// div.append(newButton);//for add at ending
// div.prepend(newButton);//for add in starting position of div
// div.before(newButton);//starting of div tag
// div.after(newButton);

// let par = document.querySelector("p");
// par.after(newButton);


// let newH= document.createElement("h2");
// newH.innerHTML="<i>this is my javascript edited</i>";
// let div = document.querySelector("div");
// div.before(newH);

// let para = document.querySelector("p");
// para.remove();

// let div2 = document.querySelector("div");
// let lis = div2.querySelector("ul");
// let item = lis.querySelector("li");
// item.remove();
// console.log(item);

// let new_bu = document.createElement("button");
// new_bu.innerText = "click me";
// new_bu.style.backgroundColor = "aliceblue";
// new_bu.style.color = "black";
// let body = document.querySelector("body");
// body.prepend(new_bu);

// let new_p = document.querySelector("p");
// console.log(new_p.classList);
// new_p.classList.add("newclass");

// let ft1 = document.querySelector('#ft1');
// ft1.onclick = () =>{
//   console.log("btn1 was clicked");
//   let par = document.createElement('p');
//   par.innerHTML ="<i>this is paragraph</i>";
//   ft1.before(par);
//   let a = 25;
//   a++;
//   console.log(a);
// }

// ft1.addEventListener("click",()=>{
//   console.log("button was clicked");
// })

let mode = document.querySelector("button");
let currmode = "light";
let body = document.querySelector("body");
mode.addEventListener("click",()=>{
  if(currmode === 'light'){
    currmode = 'dark';
    body.classList.add("dark");
  }else{
    currmode='light';
    body.classList.add("white");
  }
  console.log(currmode);
  // console.log('you are trying to change a mode');
})
