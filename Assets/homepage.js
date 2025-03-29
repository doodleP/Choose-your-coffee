document.addEventListener("DOMContentLoaded", function () {

    //steam animation

    const steamPuffs = document.querySelectorAll(".steam");
    steamPuffs.forEach(steam => {
        let randomDelay = Math.random() * 2.5;
        steam.style.animationDelay = `${randomDelay}s`;
    });

    //sound

    const coffeeItems = document.querySelectorAll(".coffee-table div");
    const navItems = document.querySelectorAll(".navbar div");
    const soundEffect = new Audio("Assets/sounds/click-sound.wav");

 
    coffeeItems.forEach(item => {
        item.addEventListener("click", () => {
            soundEffect.currentTime = 0;
            soundEffect.play();

            
            const coffeeType = item.querySelector("p").textContent.toLowerCase().replace(" ", "-");


            setTimeout(() => {
                window.location.href = `loading.html?next=Coffee/${coffeeType}.html`;
            }, soundEffect.duration * 1000);
        });
    });

    // Navbar items 
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            soundEffect.currentTime = 0;
            soundEffect.play();
        });
    });

    // About page redirect
    document.querySelector(".navbar div:nth-child(4)").addEventListener("click", function() {
        let audio = new Audio("Assets/sounds/click-sound.wav");
        audio.play();

        setTimeout(() => {
            window.location.href = "about.html";
        }, audio.duration * 1000);
    });

    // Back page redirect
    document.querySelector(".navbar div:nth-child(2)").addEventListener("click", function() {
        let audio = new Audio("Assets/sounds/click-sound.wav");
        audio.play();

        setTimeout(() => {
            window.location.href = "index.html";
        }, audio.duration * 1000);
    });

    // Restart page redirect
    document.querySelector(".navbar div:nth-child(3)").addEventListener("click", function() {
        let audio = new Audio("Assets/sounds/click-sound.wav");
        audio.play();

        setTimeout(() => {
            window.location.href = "index.html";
        }, audio.duration * 1000);
    });
});
