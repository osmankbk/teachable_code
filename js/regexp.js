//Regular Expressions.

//Replace
let quote = /"(?<oz>[^"]*)"/g;

let replacement = 'He said, "stop", "kakabalah"'.replace(quote, '-$<oz>-');
// console.log(replacement);

//Match
let string = "7 plus 8 equals to 15";
let answer = string.match(/\d+/g);
// console.log(answer[2]);

let url = /(?<protocol>\w+):\/\/(?<host>[/w.])\/(?<path>\S*)/;
let text = "visit my blog at http://www.example.com/~david"
let match = text.match(url);
console.log(match);