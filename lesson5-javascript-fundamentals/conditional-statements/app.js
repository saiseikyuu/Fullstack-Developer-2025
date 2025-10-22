// less than 6 yrs old -> free
// 6 - 17 yrs old -> child discount
// 18 - 64 yrs old -> full price
// 65+ yrs old -> senior citizen discount


let age = 100;


if (age < 6){ 
    console.log("You get in for free!");
} else if (age <= 17){
    console.log("You get a child discount.");
} else if (age <= 64){
    console.log("You pay full price.");
} else {
    console.log("You get a senior citizen discount.");
}