// // //Re-assigning values to a different variable

let a = ["a","b","c"];
let c = [...a];
console.log(c);

let x = [1, 2, 3];
let b = Array.from(x);
console.log(b);





// // //Assigning properties and values of an object to a variable throug "for of" loop;

let obj = {
    name: "osman",
    last: "kamara",
    age: 30,
    salary: "6 figures"
}

for(const [name, value] of Object.entries(obj)) {
    console.log(name, value);
}

// //Destructing 

// //Destructing assignment using array of values

// let [boy, girl] = ['guy', "nata"]
// console.log(boy, girl);

// //Destructing assignment using object of values

const { cos, tan, sin } = Math;
console.log(cos, tan, sin)

const{ cos: coSign, tan: tanTouch, sin: sinCommit } = Math;
console.log(coSign, tanTouch, sinCommit);

// //Destructing array of objects

let people = [ 

    {name: 'osman', last: 'kamara'},
    {name: 'Aziz', last: 'ceesay'}
]

let [{ name: firstName, last: lastName }, { name: firstNameSec, last:lastNameSec}] = people;
console.log(lastNameSec);

// //Destructing objects of array

let persons = {
    first: ['osman', 'kamara'],
    last: ['Aziz', "Ceesay"]
}

let {first: [ firstName, lastName ], last: [ firstNameSec, lastNameSec ]} = persons;
 console.log(lastNameSec);

 //Optional Chaining

let check = lastNameSec && "not here";
console.log(check);