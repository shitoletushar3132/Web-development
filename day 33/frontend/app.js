// const stud1 = {
//     name:"tush",
//     age:28,
//     marks:95
// };

// const stud2 = {
//     name:"vi",
//     age:28,
//     marks:95
// };
// const stud3 = {
//     name:"ku",
//     age:28,
//     marks:95
// };

// let arr = [1,2,4]

// arr.sayhello = () =>{
//     console.log("hello");
// }

// function personMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log("hi, my name is")
//         }
//     };
//     return person;
// }

//constructors
// function Person(name, age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk = function(){
//     console.log("this is talk");
// }

// let p1 =new Person("adam",25);

// class Person{
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`hi, my name is ${this.name}`);
//     }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`this is my name ${this.name}`);
  }
}
class Student extends Person{
  constructor( name,age,marks) {
    super(name,age);
    this.marks = marks;
  }

  talk() {
    console.log(`this is my name ${this.name}`);
  }
}

class Teacher extends Person{
  constructor(name,age,students) {
    super(name,age);
    this.marks = marks;
  }

  talk() {
    console.log(`this is my name ${this.name}`);
  }
}
