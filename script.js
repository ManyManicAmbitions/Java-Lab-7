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

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const status = document.getElementById("status");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        formMessage.textContent = `Submission successfull. username: ${username.value}, status: ${status.value}`;
    });

    const focusInput = document.getElementById("focusInput");
    const focusMessage = document.getElementById("focusMessage");

    focusInput.addEventListener("focus", function(){
        focusMessage.textContent = "focused";
    });

    focusInput.addEventListener("blur", function(){
        focusMessage.textContent = "focus lost";
    });
});