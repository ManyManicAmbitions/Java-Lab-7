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
    });

    const keyPressed = document.getElementById("keyPressed");
    const displayKeyPressed = document.getElementById("displayKeyPressed");

    keyPressed.addEventListener("keydown", function(event){
        displayKeyPressed.textContent = `Key pressed is: ${event.key}`;
    });
});