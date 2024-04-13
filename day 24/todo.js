let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let tasks = document.querySelector(".tasks")

button.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.classList.add("item");

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("del");
  delBtn.classList.add("btn");

  
  if (input.value !== "") {
    newItem.innerText = input.value;
    ul.appendChild(newItem);
    newItem.appendChild(delBtn);
    input.value = "";
  }

  input.value = "";
});




ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    // console.log(event);
    if(event.target.nodeName == "BUTTON"){
        let listItem = (event.target.parentElement);
        listItem.remove();
    }
})
