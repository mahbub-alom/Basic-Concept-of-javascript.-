/**
 * DataTypes
 * Primitive: String,boolean,number,null,undefined.
 * Non-Primitive:Reference Variable(Array,object,Function).
 *
 * ---------------------------------------------------
 * Mutability: Primitive data types are immutable, while non-primitive types are mutable.
 * Storage: Primitive data types are stored directly in memory, whereas non-primitive   types are stored by reference.
 */

let a = 5;
let b = a;
b = 6;
// console.log("a:", a);
// console.log("b:", b);

const num1 = [1, 2, 3, 4];
const num2 = num1;
num2.push(5)
console.log("num1:", num1);
console.log("num2:", num2);
