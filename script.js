//let main = document.getElementById("counter")
//let btn = document.getElementById("reset")

let count = 0;

counter.onclick = function () {
    count++ ;
    counter.innerHTML = count;
}

reset.onclick = function () {
    count = 0;
    counter.innerHTML = count;
}