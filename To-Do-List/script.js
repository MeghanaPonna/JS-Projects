const inputBox = document.getElementById("input-box");
const listCntr = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCntr.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listCntr.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCntr.innerHTML);
}

function showTask(){
    listCntr.innerHTML = localStorage.getItem("data");
}
showTask();