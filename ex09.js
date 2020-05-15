// Exercise 09: Files
// https://nodejs.org/api/fs.html
const fs = require("fs");

let contents = fs.readFileSync("ex09.txt");

console.log("Contents: ");
console.log(contents.toString());

// Using a callback

console.log("--------------------");
fs.readFile("ex09.txt", (err, data) => {
    if (err) throw err;    
    console.log(data.toString());
});

