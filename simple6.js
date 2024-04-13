const url = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(url);
console.log(promise);

let factpara = document.querySelector("#text");
let btn = document.querySelector("button");

const getFactsAsync = async ()=>{
    console.log("getting data....");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    factpara.innerText=(data[0].text);
}

function getFactPromi(){
    fetch(url).then((respone)=>{
        return respone.json();
    }).then((data)=>{
        console.log(data[0].text);
    })
}
// btn.addEventListener("click",getFacts)
