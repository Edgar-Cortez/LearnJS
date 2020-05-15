// Exercise 12: Functions, Files, Variables

const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString() + "\n");
}

const yell_at_me = (what) => {
    return what.toUpperCase();
}

const shh_at_me = (what) => {
    return what.toLowerCase();
}

let file = process.argv[2];
fs.readFile(file, print_lines);

// Let's do that again but with an anonymous function
// you've actually seen this before

fs.readFile("ex12.txt", (err, data) => {
    let yelling =  yell_at_me(data.toString());
    let whisper = shh_at_me(data.toString());
    print_lines(err, yelling);
    print_lines(err, whisper);
});