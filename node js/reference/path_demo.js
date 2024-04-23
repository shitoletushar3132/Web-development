const path = require('path');
console.log(path.basename(__dirname));

//File extension

// console.log(paht.extname(__filename))
console.log(path.parse(__filename));

// concatenate paths


console.log(path.join(__dirname,'test','hello.html'))