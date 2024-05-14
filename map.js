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
