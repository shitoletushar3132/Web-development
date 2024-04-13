const student ={
    name:"tushar",
    age:21,
    marks : 98.8,
    city : "pune"
};

const item = {
    price : 100.99,
    discount : 50,
    colors : ["red", "pink"]
}

const twitterPost = {
    username : "tusharshitole_",
    content:"this is my js",
    likes: 900,
    reposts : 10,
    tag : ['kunaldivekar','omdivekar']
}

student.city = "mumbai";
student.gender = "male";
delete student.city;


// const classInfo = {
//     aman :{
//         grade :'A+',
//         city :"delhi"
//     },
//     shradha :{
//         grade : 'A',
//         city : 'pune'
//     },
//     tushar:{
//         grade:'A++',
//         city:'pune'
//     }
// }

const classInfo = [
    {
        name : 'Tushar',
        grade :'A+',
        city :"delhi"
    },
    {
        name : 'shradha',
        grade : 'A',
        city : 'pune'
    },
    {
        name:"aman",
        grade:'A++',
        city:'pune'
    }
]


// let num = prompt("enter a number to find square root");
// console.log(Math.sqrt(num));


// let random = Math.random();
// let big = random *100;
// let res = Math.floor(big) + 1;
// console.log("Random number between 1 to 100",res);

let range = prompt("enter your range that you want to guess")
let guess = prompt('Guess the number between 1 to 10 ');
let random = Math.floor(Math.random()*range)+1;
let numbe = 0; 
while(true){
    if(guess == "quit"){
        break;
    }
    if(guess == random){
        console.log("you guess right", random);
        console.log(`you get a ${numbe} chances`);
        break;
    }
    else{
        if(guess > random){
            console.log("Your guess wrong ?", `you guess to larger than random`);
        }
        else{
            console.log("Your guess wrong ?", `you guess to smaller than random`)
        }
        
    }
    numbe++;
    guess = prompt('Guess the number between 1 to 10 ')
}
