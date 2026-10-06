let counter = document.getElementById("counter");
let minusBtn = document.getElementById("btn-minus");
let resetBtn = document.getElementById("btn-reset");
let plusBtn = document.getElementById("btn-plus");


plusBtn.addEventListener("click", function () {
    counter.textContent = Number(counter.textContent) + 1;

    if (Number(counter.textContent) == 0) {
        counter.style.color = "black";
    } else if (Number( counter.textContent) >= 1) {
        counter.style.color = "green";
    };


});

minusBtn.addEventListener("click", function () {
    if (counter.textContent == 0) {
        counter.textContent = 0;
    } else {
        counter.textContent = Number(counter.textContent) - 1;
    };
    
    if (Number(counter.textContent) == 0) {
        counter.style.color = "black";

    } else {
        counter.style.color = "red"
    };
});

resetBtn.addEventListener("click", function () {
    counter.textContent = 0;

    if (Number(counter.textContent) == 0) {
        counter.style.color = "black"
    };
});