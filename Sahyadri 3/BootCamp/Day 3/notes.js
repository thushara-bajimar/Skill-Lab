// javascript.info




// var in JavaScript

// var declares a variable. It is function-scoped, not block-scoped.
// That means if you declare var inside a function, it is visible throughout that entire function.
// If you declare it inside an if block or for loop, it is still accessible outside that block.

if (true) {
  var a = 10;
}
console.log(a); // 10

// var variables are hoisted. The declaration is moved to the top of its scope before code runs,
// but the assignment stays where it is.
console.log(b); // undefined
var b = 5;

// This behaves like:
// var b;
// console.log(b);
// b = 5;

// You can **redeclare** and **reinitialise** the same var variable in the same scope without an error.
var c = 1;
var c = 2;
console.log(c); // 2

// In modern JavaScript, prefer let and const.
// Use let for variables that change.
// Use const for values that should not be reassigned.
// var is mostly used in older code or when you need function-scoped behavior.





// let in JavaScript

// let declares a variable. It is block-scoped, meaning it is only visible inside the nearest { } block.
// If you declare let inside an if block or for loop, it is not accessible outside that block.

if (true) {
  let x = 10;
}
// console.log(x); // ReferenceError: x is not defined

// let is not hoisted in the same way as var.
// The declaration is in a temporal dead zone until the code execution reaches it.
// Accessing it before declaration causes ReferenceError.
// console.log(y); // ReferenceError
let y = 5;

// You **cannot redeclare** the same let variable in the same scope.
let age = 25;
// let age = 30; // SyntaxError: Identifier 'age' has already been declared

// You can reassign a let variable.
let score = 10;
score = 20; // Allowed. The value changes from 10 to 20.
// can **reinitialise** but can't **redeclare**





// const in JavaScript

// const declares a variable whose value cannot be reassigned.
// It is also block-scoped like let.

const PI = 3.14;
// PI = 3.1415; // TypeError: Assignment to constant variable.

// **const variables must be initialized** when declared.
// The following line would cause an error:
// const value; // SyntaxError: Missing initializer in const declaration

// For objects and arrays, the reference is constant, but the contents can change.
const person = { name: 'Asha' };
person.name = 'Ravi'; // Allowed
// person = { name: 'Ravi' }; // Not allowed

// Use const by default when the variable does not need reassignment.
// Use let only when the value will change.






// == vs === in JavaScript

// `==` compares values with type coercion. If the operands are of different types,
// JavaScript converts one side so the comparison can be made.
console.log(0 == '0');      // true
console.log(false == 0);    // true
console.log(null == undefined); // true

// `===` compares values without type coercion (strict equality). Both type and value must match.
console.log(0 === '0');     // false
console.log(false === 0);   // false
console.log(null === undefined); // false

// Best practice: prefer `===` (strict equality) to avoid unexpected coercion. Use `==` only
// when you explicitly want the coercion behavior and understand the conversion rules.


let num = 20;
if(num % 2 === 0){
  console.log("\neven");
}else{
  console.log("\nodd");
}

let user = "abc";
let pass = 123;
let role = "dev";

if((user && pass) || role){
  console.log("\nlogged in");
}
else{
  console.log("\nerror");
}


let custAge = 17;
let day = "saturday";
let tickets = 3;

if(custAge < 12){
  console.log("\n50% discount");
}else if(12<=custAge<=22){
  console.log("\n20% discount");
}else{
  console.log("\nno discount");
}

if(day === "saturday" || day === "sunday"){
  console.log("ticket price is 250");
}else{
  console.log("ticket price is 200");
}

if(tickets >= 5){
  console.log("additional 10 % discount on total");
}


for(let i=1 ; i<=15 ; i++){
  if(i%2 === 0){
    console.log(i);
  }
}
for(let i=5 ; i<=15 ; i++){
  if(i%2 != 0){
    console.log(i);
  }
}

let obj = {
  name: "abc",
  age: 20,
  id: 1234
}

console.log(obj);

//create a fun max() and find largest item in array
function maxItem(arr){
  let max = 0;
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log(maxItem([25, 46, 89, 10, 34]));