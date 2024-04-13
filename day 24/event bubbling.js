let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("div was clicke");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicke");
});

for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li was clicke");
  });
}
