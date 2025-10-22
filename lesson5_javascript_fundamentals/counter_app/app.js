

let count = 0;
let countElement = document.getElementById("count");

function increment(){
    count += 1;
    countElement.innerText = count;
}


function decrement(){
    count -= 1;
    countElement.innerText = count;
}