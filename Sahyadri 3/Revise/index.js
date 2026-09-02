let num = 8;

// even or odd
if(num % 2 == 0){
    console.log("even");
}else{
    console.log("odd");
}
console.log("\n")

// multiplication
for(let i=1 ; i<=10 ; i++){
    console.log(i*num);
}
console.log("\n")

// common el
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

for(let i=0 ; i<a.length ; i++){
    if(b.includes(a[i])){
        console.log(a[i]);
    }
}