document.addEventListener("DOMContentLoaded", function () {
    const steamPuffs = document.querySelectorAll(".steam");

    steamPuffs.forEach(steam => {
        let randomDelay = Math.random() * 2.5;
        steam.style.animationDelay = `${randomDelay}s`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const coffeeItems = document.querySelectorAll(".coffee-table div");
    const navItems = document.querySelectorAll(".navbar div");
    const soundEffect = new Audio("Assets/sounds/click-sound.wav");
    coffeeItems.forEach(item => {
        item.addEventListener("click", () => {
            soundEffect.currentTime = 0;
            soundEffect.play();

            setTimeout(() => {
                window.location.href = "loading.html";
            }, 500);
        });
    });

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            soundEffect.currentTime = 0;
            soundEffect.play();
        });
    });
});

document.querySelector(".navbar div:nth-child(4)").addEventListener("click", function() {
    let audio = new Audio("Assets/click.wav");
    audio.play();

    
    setTimeout(() => {
        window.location.href = "about.html";
    }, 500);
});


document.querySelector(".navbar div:nth-child(3)").addEventListener("click", function() {
    let audio = new Audio("Assets/click.wav");
    audio.play();

    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
});
