// // // //Re-assigning values to a different variable

let a = ["a","b","c"];
let c = [...a];
console.log(c);

let x = [1, 2, 3];
let b = Array.from(x);






// // // //Assigning properties and values of an object to a variable throug "for of" loop;

// let obj = {
//     name: "osman",
//     last: "kamara",
//     age: 30,
//     salary: "6 figures"
// }

// for(const [name, value] of Object.entries(obj)) {
//     console.log(name, value);
// }

// // //Destructing 

// // //Destructing assignment using array of values

// let [boy, girl] = ['guy', "nata"]
// console.log(boy, girl);

// // //Destructing assignment using object of values

// const { cos, tan, sin } = Math;
// console.log(cos, tan, sin)

// const{ cos: coSign, tan: tanTouch, sin: sinCommit } = Math;
// console.log(coSign, tanTouch, sinCommit);

// // //Destructing array of objects 

// let people = [ 

//     {name: 'osman', last: 'kamara'},
//     {name: 'Aziz', last: 'ceesay'}
// ]

// let [{ name: firstName, last: lastName }, { name: firstNameSec, last:lastNameSec}] = people;
// console.log(lastNameSec);

// // //Destructing objects of array

// let persons = {
//     first: ['osman', 'kamara'],
//     last: ['Aziz', "Ceesay"]
// }

// let {first: [ firstName, lastName ], last: [ firstNameSec, lastNameSec ]} = persons;
//  console.log(lastNameSec);

//  //Optional Chaining

// let check = lastNameSec && "not here";
// console.log(check);

// Using for/of loop with strings

let frequency = {};

for(let letter of "mississippi") {
    if(frequency[letter]){
        frequency[letter]++;       
    } else {
        frequency[letter] = 1;
    }
}

//console.log(frequency);


//Using for/of loop with Set
let text  = "Na na na na na na na Batman!";

let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}

// console.table(unique);

//Factorial throw a new error
function factorial(x) {
if(x < 0) throw new Error("can't use negative numbers");    

let f;
for(f = 1; x > 1; f *= x, x-- );
    return f;
}

//Factorial with recursion
const factorias = function factoria(x) {
    if(x <= 1) return 1;
   else return x * factoria(x - 1);

}

//console.log(factorias(10));

//Changing strings to itarable array element

let a = ['osmanisdope'];
let b = [...'osmanisdope'];
//console.log(b);

//Remove duplicate array elements with Set

let aa = ['Oz', 'is', 'dope', 'osman', 'Oz', 'dope', 'is']
let bb = [...new Set(aa)];
//console.log(bb);


//map() vs flat() & flatMap()
let numbers = [1, 2, 4, 5, 6, 7, 8, [9, 10, [12, 14]]]
let mapa = numbers.map(x => x * 2);
console.log(mapa);// map does not flattend array that are themselve arrays, it just return NaNa

let numbers2 = [1, 2, 4, 5, 6, 7, 8, [9, 10, [12, 14]]]
let map = numbers2.flat(2);
console.log(map);// flat flattens the array. On default it flattens the first layer, an argument is required for further flattening

let numbers3 = [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 14];
let map2 = numbers3.flatMap(x => x * 2);
console.log(map2);// flatMap & flats array elements at the same time