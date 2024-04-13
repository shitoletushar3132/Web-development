// let nums = [2, 4, 6, 8, 10];

// let print = function (el) {
//   console.log(el);
// };

// nums.forEach(print);

// nums.forEach((el) => {
//   console.log(el**2);
// });

let arr = [
  {
    name: "tushar",
    marks: 95,
  },
  {
    name: "kunal",
    marks: 96,
  },
  {
    name: "chetan",
    marks: 93,
  }
];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });

let arr2 = [2,4,5,6];
let squ = arr2.map((num)=>{
    return num*num;
});


let arr3 = [1,2,3,4,6,8,5,3,10,11,24];

let even = arr3.filter((num)=>{
    return num%2==0;
});


let arr4 = [1,23,5,3,4];
let ansArr4 = arr4.every((num)=>{
    return num<35;
});


let arr5 = [32,43,1,33,4,31,100,32];
let ansArr5 = arr5.reduce((res,num)=>{
    return (res+num);
});

let greatAnsArr5 = arr5.reduce((max,num)=>{
    if(num>max){
        return num;
    }else{
        return max;
    }
});

let arr6 = [10,20,30,43];
let resultMUl10  = arr6.every((num)=>{
    return num%10 == 0;
});

let getMin=(nums)=>{
    let res = nums.reduce((min,num)=>{
        if(min<num){
            return min;
        }else{
            return num;
        }
    });
    return res;
};

let nums = [10,20,4,104];


const data= {
    email:"tusharshitle212",
    pass : 3132,
};

data.addres = "varvand";
const dataCopy={
    ...data,id:3132,
};


const arrSpr = {
    ...nums,
}


function sumAll(...args){
   return args.reduce((sum, num)=>{
        return sum + num;
    })
};