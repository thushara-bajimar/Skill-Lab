// method: select/access html elmnt
// property: perform operations

let h1 = document.querySelector("h1");
console.log(h1.innerText);

h1.innerText = "This is a greeting.";
console.log(h1.innerText);

let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    alert("clicked successfully");
    btn.innerText = "Ouch! You Clicked Me";
});