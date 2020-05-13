// Exercise 17: Sequences and For Loops

// let pigments = ["perinone","cadmium",
//     "titanium","ultramarine","napthol"];

// let i = 0;
// // You've seen this already
// while (i < pigments.length) {
//     console.log(`while ${i} = ${pigments[i]}`);
//     i++;
// }

// You can do the above in one move like this
// for (let i = 0; i < pigments.length; i++) {
//     console.log(`for ${i} = ${pigments[i]}`);    
// }

// But this is the easiest of all
// for (paint of pigments) {
//     console.log(`for-in ${paint}`);
// }

// ********** EVERYTHING LOOPING **********
let count = 5;
label1:
while (count > 0) {
    console.log("in while", count);
    if (count > 2) {
        for (let i = 0; i < 4; i++) {
            console.log("in for", i);
            if (i == 2) {
                count--;
                continue label1;
            }
        }
    } else if (count == 2) {
        count -= 2;
        console.log("Continue in while");
        continue label1;
    } else {
        break;
    }

    count--;
}

label2:
console.log("Done.");
