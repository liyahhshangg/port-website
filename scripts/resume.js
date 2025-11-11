let toggleB = document.getElementById("toggleB"); 

let toggleBState = false; 
function toggleBorders() {
    var elements = document.querySelectorAll("*"); 
    if (!toggleBState) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style = "outline: 1px solid";
        }
        toggleBState = true;
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style = "outline: none";
        }
        toggleBState = false;
    }
}

toggleB.addEventListener("click", toggleBorders); 