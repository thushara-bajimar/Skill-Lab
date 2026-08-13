/*
  ADVANCED JAVASCRIPT — a small, runnable learning guide

  Run this file with: node advanceJS.js
  Read the examples in order. The console output shows the order in
  which JavaScript performs each task.
*/

// -------------------------------------------------------------------
// 1. Synchronous code
// -------------------------------------------------------------------
// Synchronous statements run one after another, from top to bottom.
console.log("1. Start of synchronous example");
console.log("2. This runs immediately after start");

// -------------------------------------------------------------------
// 2. Asynchronous code
// -------------------------------------------------------------------
// setTimeout asks JavaScript to run the function later. JavaScript does
// not wait for it, so "End" appears before the timeout message.
console.log("\nAsync example:");
setTimeout(() => {
  console.log("This appears after about 1 second");
}, 1000);
console.log("This appears before the timeout message");

// -------------------------------------------------------------------
// 3. Callbacks
// -------------------------------------------------------------------
// A callback is a function passed to another function so it can be run
// at the right time.
function outer(callback) {
  console.log("outer is running");
  callback();
}

function inner() {
  console.log("inner was called back by outer");
}

console.log("\nCallback example:");
outer(inner); // We pass the function itself, not inner().

// Callbacks can also receive data.
function greet(name, callback) {
  callback(`Hello, ${name}!`);
}

greet("Learner", (message) => console.log(message));

// -------------------------------------------------------------------
// 4. Promises
// -------------------------------------------------------------------
// A Promise represents a result that will be available in the future.
// It has three states: pending, fulfilled (resolved), or rejected.
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You can register.");
    } else {
      reject("You must be at least 18.");
    }
  });
}

console.log("\nPromise example:");
checkAge(20)
  .then((message) => {
    // .then runs when the promise is resolved.
    console.log(message);
  })
  .catch((error) => {
    // .catch runs when the promise is rejected.
    console.log(error);
  })
  .finally(() => {
    // .finally runs whether it succeeds or fails.
    console.log("Age check finished.");
  });

// -------------------------------------------------------------------
// 5. async / await
// -------------------------------------------------------------------
// async/await is a more readable way to work with promises.
function getStudent() {
  return Promise.resolve({ name: "Asha", course: "JavaScript" });
}

async function showStudent() {
  try {
    const student = await getStudent(); // Wait only inside this function.
    console.log(`\n${student.name} is learning ${student.course}.`);
  } catch (error) {
    console.log("Could not get student data:", error);
  }
}

showStudent();

/*
  Quick recap:
  - Synchronous code waits for each statement to finish.
  - Asynchronous code lets other work continue while it waits.
  - A callback is a function given to another function.
  - A Promise represents a future success or failure.
  - async/await makes Promise-based code easier to read.
*/
