'use strict';

//result of binary operator "+"

console.log(null + undefined); // result is NaN;
console.log(null + true); //it takes null's number value , so result is 1
console.log(null + false); //for the same reason as in the previous example, 0+0 ===0
console.log(null + 3); // looked above, 0+3 ===3
console.log(null + NaN); // any value + NaN(exception - string), result is NaN
console.log(null + 'Hello'); // string stringifies null, so result is "nullHello"
console.log(null + a + b + c + d); // reference error, a,b,c,d aren't declared
console.log(undefined + true); // NaN, undefined has no type
console.log(undefined + false); // NaN
console.log(undefined + 'Hello'); // 'undefinedHello', string stringifies undefined
console.log(undefined + a + b + c + d); //reference error, a,b,c,d aren't declared
console.log(true + false); // 1 sum of their number value 1+0
console.log(true + 2); // 3
console.log(true + NaN); // any value + NaN(exception - string), result is NaN
console.log(true + a + b + c + d); //reference error, a,b,c,d aren't declared
console.log(false + 4); //4 , sum of their number value 0+4
console.log(false + NaN); // any value + NaN(exception - string), result is NaN
console.log(false + 'hello'); // "falsehello" string stringifies false
console.log(5 + 3); //8, sum o two operands
console.log(5 + NaN); // NaN, any value + NaN(exception - string), result is NaN
console.log(5 + 'hello'); //"5hello" string stringifies number
console.log('hello' + NaN); // string stringifies "helloNaN"
