import path from 'path';
import url from 'url';


const filePath = './dir1/dir2/text.txt';

//basename()
console.log(path.basename(filePath));


//dirname()
console.log(path.dirname(filePath));


//extName();
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


