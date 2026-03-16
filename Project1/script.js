let count = 0;

function showText() {
    count++;

    switch(count) {
    case 1:
         document.getElementById("text").innerHTML += " and then just touch me";
         break;
    case 2:
         document.getElementById("text").innerHTML += " so i can get my";
         break;
    case 3:
         document.getElementById("text").innerHTML += " Satisfaction";
         break;
     default:
     break;
    }
}