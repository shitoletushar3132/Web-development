// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     return one() + two();
// }

// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)
// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)
// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)
// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)
// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)
// setTimeout(()=>{
//     console.log("tushar shitole")
// },5000)

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// callback hell
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("pink", 1000, () => {
//       changeColor("blue", 1000);
//     });
//   });
// });



// setTimeout(()=>{
//     h1.style.color="red";
// },1000)

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000)

// setTimeout(()=>{
//     h1.style.color="green";
// },3000)

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "tushar",
//   () => {
//     console.log("your data was saved:");
//     savetoDb(
//       "hello wordl",
//       () => {
//         console.log("success 2");
//         savetoDb("shitole",()=>{
//             console.log("success 3")
//         },()=>{
//             console.log("failure 3")
//         })
//       },
//       () => {
//         console.log("failure 2");
//       }
//     );
//   },
//   () => {
//     console.log("weak connction");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("data was saved");
//     } else {
//       reject("weak connection");
//     }
//   });
// }

// savetoDb("shitole")
//   .then((result) => {
//     console.log("data1 saved promise was resolved");
//     console.log(reuslt);
//     return savetoDb("helloworld")
//   }).then(()=>{
//     console.log("data2 is saved");
//     return  savetoDb("shitsssss")
//   }).then(()=>{
//     console.log('data 3 save');
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
//   });
