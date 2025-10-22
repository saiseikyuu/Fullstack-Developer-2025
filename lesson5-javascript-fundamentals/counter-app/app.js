
let countElement = document.getElementById("count-element");
let saveElement = document.getElementById("save-element");


let count = 0;

console.log(saveElement)

function increment(){
    count += 1;
    countElement.innerText = count;

}


function decrement(){
    count -= 1;
    countElement.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveElement.textContent += countStr
    countElement.textContent = 0;
    count = 0;
}