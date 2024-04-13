let para = document.createElement("p");
para.innerText = "Hey I'm red!";
document.querySelector("body").append(para);
para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);
// h3.style.color='blue';
para.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = `that say "I'm in a div`;
p.innerText = "ME TOO!";

div.append(h1);
div.append(p);
// div.setAttribute("class","box");
div.classList.add("box");

document.querySelector("body").append(div);

let hr = document.createElement("hr");
document.querySelector("body").append(hr);

let form = document.createElement("form");

let input = document.createElement("input");
// input.setAttribute('placeholder','type something---');
input.placeholder = "username";
// input.setAttribute('type',"text");
input["type"] = "text";

let btn = document.createElement("button");
btn.innerText = "click me";
btn.setAttribute("id", "btn");

form.append(input);
form.append(btn);
document.querySelector("body").append(form);

let h11 = document.createElement("h1");
h11.innerText = "DOM Practice";
document.querySelector("body").append(h11);
h11.id = "h1tag";

let newp = document.createElement("p");
newp.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(newp);
