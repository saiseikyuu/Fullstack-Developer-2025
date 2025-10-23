
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";

})

function renderLeads(){
    let listItems = "";
    for (let lead in myLeads){
        // listItems += "<li><a target='_blank' href='" + myLeads[lead] + "'>" + myLeads[lead] + "</a></li>";
    listItems += `
    <li>
         <a target='_blank' href='${myLeads[lead]}'>${myLeads[lead]}</a>
    </li>`;
    }
    ulEl.innerHTML = listItems;
}

