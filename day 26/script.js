// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// async  function demo(){
//     await changeColor("orange",1000)
//     await changeColor("red",1000)
//     await changeColor("pink",1000)
//     await changeColor("blue",1000)
// }

// async function greet(){
//     throw "some random error";
//     return hello;
// }

// greet().then((reuslt)=>{
//     console.log("promise was resolved :",reuslt);
// })
// .catch((err)=>{
//     console.log("promoise was ejected with err :",err)
// })

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       return num;
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }

// let jsonRes =
//   '{"fact": "A cat has two vocal chords, and can make over 100 sounds.","length": 57 }';

// let student = {
//     name:"tushar",
//     age:21,
// };

// let vali = JSON.stringify(student);

// console.log(vali)

// let validRes = JSON.parse(jsonRes);

// console.log(validRes.fact);

let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


async function getFacts(){
    try{
        let res = await fetch(url);
    let data = await res.json();

    console.log(data.fact);
    }
    catch(e){
        console.log(e);
    }
    
}
