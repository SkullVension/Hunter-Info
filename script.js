let clickCount = 0;
let eggFound = false;

function startSite() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("mainContainer").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    if(music) {
        music.volume = 0.4;
        music.play().catch(() => console.log("Music play blocked"));
    }

    createSkulls();

    document.body.addEventListener("click", () => {
        if (eggFound) return;
        clickCount++;
        if (clickCount >= 10) {
            eggFound = true;
            document.getElementById("easterEgg").classList.remove("hidden");
        }
    });
}

function createSkulls() {
    for (let i = 0; i < 40; i++) {
        const s = document.createElement("div");
        s.innerHTML = "💀";
        s.style.position = "fixed";
        s.style.zIndex = "1";
        s.style.pointerEvents = "none";
        s.style.filter = "drop-shadow(0 0 8px #3dfc03)";
        s.style.fontSize = Math.random() * 20 + 15 + "px";
        s.style.top = Math.random() * -100 + "vh";
        s.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(s);
        animateFall(s);
    }
}

function animateFall(s) {
    const duration = Math.random() * 5000 + 3000;
    s.style.transition = "none";
    s.style.top = "-10vh";
    s.style.left = Math.random() * 100 + "vw";

    setTimeout(() => {
        s.style.transition = `top ${duration}ms linear, transform ${duration}ms linear`;
        s.style.top = "110vh";
        s.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 50);

    setTimeout(() => animateFall(s), duration + 100);
}
