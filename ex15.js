// Exercise 15: If and Else

// We test the node's debug feature and step through the code
// https://nodejs.org/api/debugger.html

// node inspect filename.js - To start debugging

// exec (variable) - to check value of specific variable

let x = 10;

if (x === 10){
    // First jump
    console.log("x is equal to 10: ", x);
} else if (x < 10){
    // Second jump
    console.log("x is less than 10: ", x);
} else {
    // Last jump
    console.log("x is greater than 10: ", x);
}

/** Consider this part a puzzle to solve
 *  what's the least number of times you have to change
 *  the code to make each console.log run?
 */

 let y = 100;

 if (y === 100) {
     if (x < 10) {
         console.log('log 1', x, y);
     } else {
         console.log('log 2', x, y);
     }
 } else {
     if (x > 10) {
         console.log("log 3", x, y);
     } else {
         console.log("log 4", x, y);
     }
 }