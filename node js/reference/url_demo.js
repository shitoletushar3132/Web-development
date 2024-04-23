const url = require('url');

const myUrl = new URL("http://mywebsite.com//hello.html?id=100&status=active");

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host);

console.log(myUrl.hostname);

//pathname 

console.log(myUrl.pathname);

//serialized query

console.log(myUrl.search);


//params object
console.log(myUrl.searchParams);


//add param

myUrl.searchParams.append('abc',123);

console.log(myUrl.searchParams);


//loop throruhg params

myUrl.searchParams.forEach((value, name) => console.log (`${name} : ${value}`));
