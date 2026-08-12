let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let res = document.querySelector("h1");
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")

add.addEventListener('click', () => {
    res.innerText = Number(num1.value) + Number(num2.value);
})

sub.addEventListener('click', () => {
    res.innerText = Number(num1.value) - Number(num2.value);
})

mul.addEventListener('click', () => {
    res.innerText = Number(num1.value) * Number(num2.value);
})

div.addEventListener('click', () => {
    res.innerText = Number(num1.value) / Number(num2.value);
})