let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("clicked");
// });

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  //   console.log("code", event.code);
  if (event.code == "ArrowUp") {
    console.log("character moves up");
  } else if (event.code == "ArrowDown") {
    console.log("character moves down");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});
