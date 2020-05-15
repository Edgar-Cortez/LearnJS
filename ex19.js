// Exercise 19: Data Objects

/** Fruits
 * data.fruit[0].count      O
 * data.fruit[0].rating     O
 * data.fruit[2].count      O
 * data.fruit[1].kind       O
 * data.fruit[3].kind       O
 * data.fruit[3].count      O
 * data.fruit[0].kind       O
 */
exports.fruit = [
    {kind: 'Apples',  count: 12, rating: 'AAA'},
    {kind: 'Oranges', count: 1,  rating: 'B'},
    {kind: 'Pears',   count: 2,  rating: 'A'},
    {kind: 'Grapes',  count: 14, rating: 'UR'}
];

/** Cars
 * data.cars[0].size
 * data.cars[1].color
 * data.cars[2].miles
 * data.cars[3].color
 * data.cars[3].miles
 * data.cars[0].color
 * data.cars[0].miles
 * data.cars[2].color
 */
exports.cars = [
    {type: 'Cadillac', color: 'Black', size: 'Big', miles: 34500},
    {type: 'Corvette', color: 'Red', size: 'Little', miles: 1000000},
    {type: 'Ford', color: 'Blue', size: 'Medium', miles: 1234},
    {type: 'BMW', color: 'White', size: 'Baby', miles: 7890}
];

/** Languages
 * data.languages[0].speed              O
 * data.languages[1].opinion[0]         O
 * data.languages[3].opinion[1]         O
 * data.languages[4].speed              O
 * data.languages[4].opinion[1]         O
 * data.languages[2].opinion[0]         O
 * data.languages[3].opinion[0]         O
 * data.languages[2].opinion[1]         O
 * data.languages[1].speed              O
 */
exports.languages = [
    {name: 'Python', speed: 'Slow', opinion: ['Terrible', 'Mush']},
    {name: 'JavaScript', speed: 'Moderate', opinion: ['Alright', 'Bizarre']},
    {name: 'Perl6', speed: 'Moderate', opinion: ['Fun', 'Weird']},
    {name: 'C', speed: 'Fast', opinion: ['Annoying', 'Dangerous']},
    {name: 'Forth', speed: 'Fast', opinion: ['Fun', 'Difficult']},
];

/** Final Challenge
 * Little Red Corvette Baby UR mush 2 fast
 * 
 * data.cars[1].size                    O
 * data.cars[1].color                   O
 * data.cars[1].type                    O
 * data.cars[3].size                    O
 * data.fruits[3].rating                O
 * data.languages[0].opinion[1]         O
 * data.fruits[2].count                 O
 * data.languages[4].speed              O
 */