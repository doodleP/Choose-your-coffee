document.querySelector(".cup-container").addEventListener("mouseover", function() {
    this.style.animation = "shake 0.5s";
});

document.querySelector(".cup-container").addEventListener("animationend", function() {
    this.style.animation = "rotate-cup 2s ease-in-out infinite alternate"; // Restart original animation
});

@keyframes shake {
    0% { transform: rotate(3deg); }
    25% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
    75% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
}
