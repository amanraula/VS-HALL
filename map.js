let btn = document.querySelector(".vib");
let txt = document.querySelectorAll("p");

let isVisible = false;

btn.addEventListener("click", () => {
    txt.forEach((elem) => {
        if (isVisible) {
            elem.style.visibility = "hidden";
            btn.style.backgroundColor="black";
        } else {
            elem.style.visibility = "visible";
            btn.style.backgroundColor="blue";
        }
    });
    
    // Toggle the visibility state
    isVisible = !isVisible;
});

let pbtn = document.querySelector(".pathbtn");
let path = document.querySelectorAll(".path");

let isVisible2 = false;

pbtn.addEventListener("click", () => {
    path.forEach((elem) => {
        if (isVisible2) {
            elem.style.visibility = "visible";
            pbtn.style.backgroundColor="blue";
        } else {
            elem.style.visibility = "hidden";
            pbtn.style.backgroundColor="black";
        }
    });
    
    // Toggle the visibility state
    isVisible2 = !isVisible2;
});

let mbtn = document.querySelector(".mode");


let ismode=false;

mbtn.addEventListener("click", () => {
        if (ismode) {
            document.body.style.backgroundColor = "black";
            mbtn.style.backgroundColor="blue";
            mbtn.textContent="LIGHT THEME";
        } else {
            document.body.style.backgroundColor = "White";
            mbtn.style.backgroundColor="black";
            mbtn.textContent="DARK THEME";
        }
    
    // Toggle the visibility state
    ismode = !ismode;
});
