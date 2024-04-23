const form = document.querySelector('form');
const textBox = document.querySelector("#code");
const btn = document.querySelector('button');

form.addEventListener('submit', getCode);

let data='';
function getCode(event){
    event.preventDefault(); // Prevent the default form submission
    data = textBox.value;
    console.log(data);

}

// module.exports=data;
