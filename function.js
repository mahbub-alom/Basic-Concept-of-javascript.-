/**1.syntex
   2. 2 type of function
*     function declaration
*     function expression
   3.this
   4.access before declaring
*/

// নরমাল ফাংশন declaration & expression দুই পদ্ধতিতে লেখা যায় । কিন্তু arrow function কে শুধু expression পদ্ধতিতে ছাড়া লিখা যায় না। 


//-------------------------------------------
// function declaration
function sum(num1, num2) {
    const total = num1 + num2;
    return total;
}
// const result = sum(1, 2)
// console.log(result);
//--------------------------------------------

//***************************************
//example: 1

const multifly = function (num1, num2) {
    return num1 + num2
}
// console.log(multifly(2, 3));
//***************************************

//---------------------------------------
// function expression
const jog = (num1, num2) => num1 + num2

const total = jog(4, 2)
// console.log(total);
//---------------------------------------


//-------------------------------------
const user = {
    age: 45,
    getAge: function () {
        console.log("normal fn:", this.age);
    },
    getAgeDetails: () => {
        console.log("arrow fn:", this.age);
    }
}
const result = user.getAge()//45,কারন normal funtion এ this কিওয়ার্ড তার parent কে এক্সেস করতে পারে।
const result2 = user.getAgeDetails()//undefined,কারন arrow funtion এ this কিওয়ার্ড তার parent কে এক্সেস করতে পারে না।
//--------------------------------------

// -------------------------------------
const finalResult = multifly2(5, 2)
console.log(finalResult);//10 , কারন normal function এ function লেখার আগে access করা যায়,

function multifly2(first, second) {
    return first * second;
}

const finalResult2 = add(5, 2)
console.log(finalResult2);//Cannot access 'add' before initialization, কারন arrow function এ  function লেখার আগে access করা যায় না,

const add = (first, second) => {
    return first * second;
}
//----------------------------------------
