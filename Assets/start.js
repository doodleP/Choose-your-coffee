document.addEventListener("DOMContentLoaded", function (){
    const button = document.querySelectorAll(".button");
    const soundEffect = new Audio("Assets/sounds/click-sound.wav");
    button.forEach(item => {
        item.addEventListener("click", () => {
            soundEffect.currentTime = 0;
            soundEffect.play();

            setTimeout(() => {
                window.location.href = "homepage.html";
            }, 500);
        });
    });
})