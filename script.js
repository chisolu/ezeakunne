const background = document.getElementById("background");
const musicBtn = document.getElementById("musicBtn");
    background.volume = 0.2;

musicBtn.addEventListener("click", () => {
    if (background.paused) {
        background.play();
        musicBtn.textContent = "stop music";
    }else{
        background.pause();
        musicBtn.textContent = "play music";
    }
})

// Auto reverse
let reverse = false;
musicBtn.addEventListener("ended", () => {
    reverse = !reverse;

    background.src = reverse;
        "oliva-reverse.mp3"
        "oliva.mp3"

    background.play();
});