let inpt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inpt.value;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("del");

    ul.appendChild(item);
    item.appendChild(del);

    inpt.value = "";
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let lstItem = event.target.parentElement;
        lstItem.remove();
    }
})