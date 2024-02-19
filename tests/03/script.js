let a = true;

function changeButton() {
    if (a == true) {
        a = false;
        document.getElementById("btn").innerHTML = "world";
    }
    else {
        a = true;
        document.getElementById("btn").innerHTML = "hello";
    }
}

let count = 0;

function addButton() {
    count += 1;
    document.getElementById("adder").innerHTML = "now " + count;
}