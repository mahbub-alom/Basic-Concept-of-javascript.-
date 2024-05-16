/**
 * DataTypes
 * Primitive: String,boolean,number,null,undefined.
 * Non-Primitive:Reference Variable(Array,object,Function).
 *
 */

let a = 5;
let b = a;
b = 6;
// console.log("a:",a)
// console.log("b:",b)

let num1 = [1, 2, 3, 4];
let num2 = [num1];
num2.push(5);
console.log("num1:", num1);
console.log("num2:", num2);
