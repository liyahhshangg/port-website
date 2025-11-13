let button = document.getElementById("toggleB"); 
let state = false; 

function toggleBorders() {
    let elements = document.querySelectorAll("*"); 
    if (!state) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style = "outline: 1px solid";
        }
        state = true;
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style = "outline: none";
        }
        state = false;
    }
}

button.addEventListener("click", toggleBorders); 
console.log("HI")