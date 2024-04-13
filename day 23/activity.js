let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector('h3');
btn.addEventListener("click",function(){
    div.style.backgroundColor = `${getRandomcolor()}`;
    h3.innerText=`${getRandomcolor()}`;
});

function getRandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}