// let hq = document.getElementById("description");

// let smallImgaes = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImgaes.length; i++){
//     console.dir(smallImgaes[i].src);
// }

// for(let i=0; i<smallImgaes.length; i++){
//     smallImgaes[i].src = "./assests/mainImg.jpg" ;
//     console.log(`value of image ${i} is changed`)
// }


// let selectByTag = document.getElementsByTagName("p");
// selectByTag[0].style="background-color:grey";


// let querTag= document.querySelector('p');
// let queryId = document.querySelector("#mainImg");
// let queryClass = document.querySelector(".oldImg");
// let queryTagAnco = document.querySelector(".box a");

// let querTagA = document.querySelectorAll("p");


// let para = document.querySelector("p");
// para.innerText="Hi, I am Peter Parker"
// para.innerHTML = "Hi, I am <b> Peter Parker </b>"

// let mainHeading = document.querySelector("h1");
// mainHeading.innerHTML= `<u>${mainHeading.innerText}</u>`;

// let img = document.querySelector("#mainImg");
// console.log(img.getAttribute('id'));
// img.setAttribute('class','main');

let img = document.querySelector("#mainImg");
console.dir(img.style);


let headling = document.querySelector('h1');
headling.style.color="purple";
headling.style.backgroundColor="red";


let links = document.querySelectorAll(".box a");
// links.style.color= "purple";
for(link of links){
    link.style.color='purple';
}



let fistPass = document.querySelector('p');
fistPass.classList.add("green");
fistPass.classList.contains('green');
fistPass.classList.toggle('green');
fistPass.classList.remove('green');



let newPara = document.createElement('p');
newPara.innerText="Hi, I am new Para";
let mBody = document.querySelector('body');
mBody.appendChild(newPara);
newPara.append(" this is a append function to add a new content in same")

let adBox = document.querySelector(".box");
adBox.appendChild(newPara);
adBox.prepend(newPara);

let btn = document.createElement("button");
btn.innerText="click Me";
btn.classList.add("btn");
btn.getAttribute('class');
btn.setAttribute('id','button');
mBody.prepend(btn);
newPara.append(btn);


let newbtn = document.createElement("button");
newbtn.innerText="NEW BUTTON!!!";
let pbt = document.querySelector('p');
pbt.insertAdjacentElement('beforebegin',newbtn);
pbt.insertAdjacentElement('afterbegin',newbtn);
pbt.insertAdjacentElement('beforeend',newbtn);
// pbt.insertAdjacentElement('afterend',newbtn);


pbt.removeChild(newbtn);
newbtn.remove();
btn.remove();
newPara.remove();




