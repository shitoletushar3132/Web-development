var arr = [1, 2, 3, 4];

// let ans= arr.filter((val) => {
//   if (val >= 3) {
//     return true;
//   }else return false;
// });

let ans = arr.find(function (val) {
  if (val == 28) return val;
});
// console.log(ans);

// var obj = {
//     name :'tushar',
//     age:15,
//     kuchbhi : 'kuchbhi'
// }
// function abcd(a,b,c){
//     return 12;
// }
// console.log(obj.name)

// fetch(`https://on-render.onrender.com/`)
// .then(response => response.json())
// .then(data => {
//     console.log(data.data);
// })
// .catch(error=>{
//     console.log(error)
// })

// axios.get('https://on-render.onrender.com/')
// .then(response=>{
//     console.log(response.data);
// })


async function fetchData(){
    try{
       const response = await fetch("https://on-render.onrender.com/");
       
       if(!response.ok){
        throw new Error("network response was not ok");
       }
       const data = await response.json();
       console.log(data);
    }
    catch(err){
        console.error(err);
    }
}
fetchData();
