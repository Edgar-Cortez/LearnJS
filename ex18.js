// Exercise 18: More Arrays

/** In node type:
 * node
 * let ex18 = require ('./ex18');
 * 
 * Then enter ex18 to see the arrays.
 */


 /** Fruit Challenge
 * ex18.fruit[0][1];    O
 * ex18.fruit[0][3];    X - Undefined   Answer - [0][2]
 * ex18.fruit[2][1];    O
 * ex18.fruit[1][0];    O
 * ex18.fruit[3][0];    O
 * ex18.fruit[3][1];    O
 * ex18.fruit[0][0];    O
 * */ 
exports.fruit = [
    ['Apples', 12, 'AAA'],
    ['Oranges', 1,'B'],
    ['Pears', 2, 'A'], 
    ['Grapes', 14, 'UR']
];


/** Cars Challenge
 * ex18.cars[0][0][1];  X - a   Answer - [0][1][1]
 * ex18.cars[1][1][1];  X - Little  Answer -[1][1][0]
 * ex18.cars[2][1][2];  O
 * ex18.cars[3][1][0];  O
 * ex18.cars[3][1][2];  O
 * ex18.cars[0][1][0];  O
 * ex18.cars[0][1][2];  O
 * ex18.cars[2][1][0];  O
 * */ 
exports.cars = [
    ['Cadillac', ['Black', 'Big', 34500]],
    ['Corvette', ['Red', 'Little', 1000000]],
    ['Ford', ['Blue', 'Medium', 1234]],
    ['BMW', ['White', 'Baby', 7890]]
];


/** Languages Challenge
 * ex18.languages[0][1][0][0];      X - s   Answer - [0][1][0]
 * ex18.languages[1][1][1][0];      O    
 * ex18.languages[3][1][1][1];      O        
 * ex18.languages[4][1][0];         O 
 * ex18.languages[4][1][1][1];      O    
 * ex18.languages[2][1][1][0];      O    
 * ex18.languages[3][1][1][0];      O    
 * ex18.languages[2][1][1][1];      O    
 * ex18.languages[1][1][0];         O
 * */ 
exports.languages = [
    ['Python', ['Slow', ['Terrible', 'Mush']]],
    ['JavaScript', ['Moderate', ['Alright', 'Bizarre']]],
    ['Perl6', ['Moderate', ['Fun', 'Weird']]],
    ['C', ['Fast', ['Annoying', 'Dangerous']]],
    ['Forth', ['Fast', ['Fun', 'Difficult']]]
];

/** Final Challenge
 * Little       O
 * Red          O
 * Corvette     O
 * Baby         O
 * UR           O
 * Mush         O
 * 2            O
 * Fast         O
 */
