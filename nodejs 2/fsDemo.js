// import fs from "fs";
import { read } from "fs";
import fs from "fs/promises";

//readFile() - callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//readfileSync() - synchronous version
// const data = fs.readFileSync('./text.txt','utf8');
// console.log(data)

//readFile() - Promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async ()=>{
    try {
        const data =await fs.readFile('./text.txt','utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// readFile();


//writeFile 
const writeFile = async ()=> {
    try {
        await fs.writeFile('./text.txt','hwllo, I am writing');
        console.log('file written to...');
    } catch (error) {
        console.log(error);
    }
};

//appendFile();

const appendFile = async () =>{
    try {
        await fs.appendFile('./text.txt','\nThis is appended text');
        console.log('file appended to...');
    } catch (error) {
        console.log(error);
    }
}


writeFile();
appendFile();
readFile();