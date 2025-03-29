const navItems = document.querySelectorAll(".navbar div");
const soundEffect = new Audio("../Assets/sounds/click-sound.wav");


navItems.forEach(item => {
    item.addEventListener("click", () => {
        soundEffect.currentTime = 0;
        soundEffect.play();
    });
});

// About page redirect 
document.querySelector(".navbar div:nth-child(4)").addEventListener("click", function() {
    let audio = new Audio("../Assets/sounds/click.wav");
    audio.play();

    setTimeout(() => {
        window.location.href = "../about.html";
    }, audio.duration * 1000);
});

//homepage navigation
document.querySelector(".navbar div:nth-child(2)").addEventListener("click", function() {
    let audio = new Audio("../Assets/sounds/click.wav");
    audio.play();

    setTimeout(() => {
        window.location.href = "../homepage.html";
    }, audio.duration * 1000);
});

//restart navigation
document.querySelector(".navbar div:nth-child(3)").addEventListener("click", function() {
    let audio = new Audio("../Assets/sounds/click.wav");
    audio.play();

    setTimeout(() => {
        window.location.href = "../index.html";
    }, audio.duration * 1000);
});

