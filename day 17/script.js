// for(let i=0; i<=10000; i++){
//     console.log(i);
// }

// for(let i=65; i<=90;i++){
//     console.log(String.fromCharCode(i));
// }

// for(let i=65; i<=90;i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }


// let i=0;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// let favoritMovie='kgf';
// let guess = prompt("Guess a Movie:")
// while((guess != favoritMovie) && (guess != "quit")){
//     console.log("Wrong");
//     guess = prompt("Guess a Movie:");
// }

// if(guess==favoritMovie){
//     console.log("CONGRATS");
// }


let fruits = ['mango','apple','banana','litchi','orange'];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }


// for(fruit of fruits){
//     console.log(fruit);
// }

let todo = [];

let command = prompt("please enter your request");

// console.log(req);

while(true){
    if(command == "quit"){
        console.log('quitting app');
        break;
    }

    if(command == "list"){
        console.log("------------------")
        for (task of todo){
            console.log(task);
        }
        console.log("------------------")
    }
    else if(command == "add"){
        let task = prompt("plz enter the task that you want to add");
        todo.push(task);
        console.log("task added")
    }else if(command == "delete"){
        let de_Task = prompt("enter a task that you want to delete");
        if(todo.includes(de_Task)){
            todo.splice(todo.indexOf(de_Task),1);
        }
        else{
            console.log("that task is not found");
        }
    }
    else{
        console.log("that option no avilable");
    }
    command = prompt("please enter your request");
}
