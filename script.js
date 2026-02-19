function startSite() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

  createParticles();
}

function createParticles() {
  for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.style.position = "absolute";
    p.style.width = "2px";
    p.style.height = "2px";
    p.style.background = "#00f6ff";
    p.style.opacity = Math.random();
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(p);

    animateParticle(p);
  }
}

function animateParticle(p) {
  const speed = Math.random() * 3000 + 2000;
  setInterval(() => {
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    p.style.opacity = Math.random();
  }, speed);
}

let clickCount = 0;
let eggFound = false;

function startSite() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

  createParticles();

  // Attach click listener to the whole page
  document.body.addEventListener("click", () => {
    if (eggFound) return;

    clickCount++;
    console.log("Clicks: " + clickCount);

    if (clickCount === 10) {
      eggFound = true;
      document.getElementById("easterEgg").classList.remove("hidden");
      alert("🥚 You found the Easter Egg! Now you are Certified lesbian 🥚");
    }
  });
}
