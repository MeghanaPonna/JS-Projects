document.addEventListener("DOMContentLoaded",function(){
    let count=0;

    const counterDisplay = document.getElementById("counter-display");
    const counterBtn = document.getElementById("counter-button");

    counterBtn.addEventListener("click",function(){
        count++;
        counterDisplay.textContent = `You Clicked ${count} times`;
    });
});