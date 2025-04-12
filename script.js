document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    const text = document.getElementById("hoverText");
    button.addEventListener("mouseenter", function(){
        this.style.backgroundColor = "lightgreen";
        text.textContent = "Hovering text.";
    });
    button.addEventListener("mouseleave", function(){
        this.style.backgroundColor = "";
        text.textContent = "Hover over button to see text."
    })
})