const counterArea = document.querySelector("#counter");

let count = 0;

counterArea.innerText = count;

function render() {
    counterArea.innerText = count;
}

let colorCount = 0;

function countUp() {
    count++ ;
    render();
    colorCount++;
    if (colorCount === 101) {
        colorCount = 1;
    }
    counterArea.style.setProperty("--count", colorCount + "%");
}

function reset() {
    count = 0;
    render();
    counterArea.style.setProperty("--count", 0 + "%")
}

counterArea.addEventListener("click", countUp)

document.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.code === "Space")
        countUp();
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
    reset();
    resetBtn.blur();
});
