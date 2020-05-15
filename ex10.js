// Exercise 10: Files, Args, Variables
const fs = require('fs');

let file_to_open = process.argv[2];
let file_rename = process.argv[3];
// let file_contents =  fs.readFileSync(file_to_open);

fs.copyFileSync(file_to_open, file_rename);
console.log(`${file_to_open} was copied and renamed as ${file_rename}`);

// console.log(`The file named ${file_to_open}  was renamed to ${file_renamed} and contains: `);
// console.log(file_contents.toString());

