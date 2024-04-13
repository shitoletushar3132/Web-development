// let box = document.querySelectorAll(".box");

// function color() {
//   return Math.floor(Math.random() * 256);
// }

// let but = document.querySelector("button");

// but.addEventListener("click", function () {
//   box.forEach((e) => {
//     e.style.backgroundColor = `rgb(${color()}, ${color()},${color()})`;
//     e.innerText = `${color()}, ${color()},${color()}`;
//   });
// });

// let prom1 = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("no Random number");
//   } else {
//     setTimeout(() => {
//       console.log("yes I am done");
//       resolve("harry");
//     }, 3000);
//   }
// });

// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//     });

// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

// console.log("Loading modules")

// console.log("DO something else")

// console.log("load data")

// let data = getData();

// console.log(data);

// console.log("process data");

// console.log("task 2");

// function hello() {
//   console.log("hello");
// }

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(hello, 4000);

// console.log("four");
// console.log("five");

//-----callback hell----

// function getdata(dataId, getNextData) {
//     setTimeout(() => {
//       console.log("data", dataId);
//       if (getNextData) {
//         getNextData(); // Call the next function in the chain
//       }
//     }, 2000);
//   }

//   getdata(1, () => { // First call
//     getdata(2, () => { // Second call
//       getdata(3, null); // Third call, no further function provided
//     });
//   });

// ----- promises-----

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData(); // Call the next function in the chain
//       }
//     }, 5000);
//   });
// }
// let promise = new Promise((resolve, reject) => {
//   console.log("i am promise");
//   reject("fail");
// });

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("fail");
//     })
// }

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 3000);
//   });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data2");
//         resolve("success");
//       }, 3000);
//     });
// }

// console.log("fetching data1.....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("feteching data2.....");
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

// console.log("feteching data2....");

// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

// console.log(1);
// console.log(2);
// console.log(3);
// async function hello(){
// //  console.log("hello");
//  setTimeout(()=>{
//     console.log('execute');
//  },4000);
// }

// console.log(4);
// console.log(5);



function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 1000);
  });
}

async function getWeatherData(){
    await api();
    await api();
}

