let clickCount = 0;
let eggFound = false;

function startSite() {
    // Hide overlay and show content
    const overlay = document.getElementById("entryOverlay");
    const container = document.getElementById("mainContainer");
    
    overlay.style.display = "none";
    container.classList.remove("hidden");

    // Start Audio
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.5;
        music.play().catch(() => console.log("Audio requires interaction first."));
    }

    createParticles();

    // Attach click listener for Easter Egg
    document.body.addEventListener("click", () => {
        if (eggFound) return;

        clickCount++;
        console.log("Clicks: " + clickCount);

        if (clickCount === 10) {
            eggFound = true;
            document.getElementById("easterEgg").classList.remove("hidden");
            alert("🥚 You found the Easter Egg! Now you are Certified Gay 🥚");
        }
    });
}

function createParticles() {
    for (let i = 0; i < 80; i++) {
        const p = document.createElement("div");
        p.className = "particle"; 
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.opacity = Math.random();
        document.body.appendChild(p);
        animateParticle(p);
    }
}

function animateParticle(p) {
    setInterval(() => {
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.opacity = Math.random();
    }, Math.random() * 3000 + 2000);
}
