let count = 0;

function showText() {
    count++;

    if (count == 1) {
        document.getElementById("text").innerHTML += " and then just touch me";
    }
    else if (count == 2) {
        document.getElementById("text").innerHTML += " so i can get my";
    }
    else if (count == 3) {
        document.getElementById("text").innerHTML += " Satisfaction";
    }
}