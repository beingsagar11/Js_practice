let count = 0;

let countHeader = document.getElementById("count");
const countAddbtn = document.getElementById("add");

countHeader.innerText = count;

countAddbtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
})

const subtractbtn = document.getElementById("sub");

subtractbtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countHeader.innerText = count;
    }
    else {
        alert("Already zero");
    }
})