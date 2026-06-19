// Edit everything in this CONFIG block to personalize the page.
const CONFIG = {
  dadName: "Dad",
  letter: `Dear Dad,

From the day you taught me to ride a bike to every late-night pep talk since,
you've been the steady gravity that keeps our little corner of the universe
in orbit. Thank you for the patience, the dad jokes, and the unconditional
love that never runs out of fuel.

Happy Father's Day. We're lucky to have you.`,
  memories: [
    "That time you tried to assemble furniture without reading the instructions — and somehow won.",
    "Your legendary BBQ that takes 4 hours but is worth every minute.",
    "The road trip playlist only you think is good.",
    "How you always know exactly what to say when things get hard.",
    "The dad jokes. All of them. Forever.",
  ],
  // Add photo filenames here after placing images in www/photos/
  photos: [],
};

document.getElementById("dadName").textContent = CONFIG.dadName;

// Starfield background
const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.floor((canvas.width * canvas.height) / 8000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.2,
    speed: Math.random() * 0.4 + 0.05,
    twinklePhase: Math.random() * Math.PI * 2,
  }));
}

function drawStars(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    const twinkle = 0.5 + 0.5 * Math.sin(time / 600 + star.twinklePhase);
    ctx.globalAlpha = 0.3 + twinkle * 0.7;
    ctx.fillStyle = "#f1f3ff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  }
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawStars);

// Typewriter letter, triggered once when scrolled into view
const letterEl = document.getElementById("letterText");
let letterTyped = false;

function typeLetter() {
  if (letterTyped) return;
  letterTyped = true;
  const text = CONFIG.letter;
  let i = 0;
  const interval = setInterval(() => {
    letterEl.textContent = text.slice(0, i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, 18);
}

const letterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) typeLetter();
  });
}, { threshold: 0.4 });
letterObserver.observe(document.getElementById("letter"));

// Memory constellation
const starField = document.getElementById("stars");
const memoryCard = document.getElementById("memoryCard");
const memoryText = document.getElementById("memoryText");

CONFIG.memories.forEach((memory, i) => {
  const btn = document.createElement("button");
  btn.className = "memory-star";
  btn.textContent = "★";
  btn.style.left = `${10 + (i * 80) % 85}%`;
  btn.style.top = `${20 + ((i * 47) % 60)}%`;
  btn.style.animationDelay = `${i * 0.3}s`;
  btn.addEventListener("click", () => {
    memoryText.textContent = memory;
    memoryCard.classList.remove("hidden");
  });
  starField.appendChild(btn);
});

document.getElementById("closeMemory").addEventListener("click", () => {
  memoryCard.classList.add("hidden");
});

// Gallery
const galleryGrid = document.getElementById("galleryGrid");
if (CONFIG.photos.length === 0) {
  galleryGrid.innerHTML = '<p class="hint">No photos added yet.</p>';
} else {
  CONFIG.photos.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `photos/${filename}`;
    img.alt = "A memory with Dad";
    galleryGrid.appendChild(img);
  });
}

// Shooting star button
document.getElementById("launchBtn").addEventListener("click", () => {
  const star = document.createElement("div");
  star.className = "shooting-star";
  const startX = Math.random() * window.innerWidth;
  star.style.left = `${startX}px`;
  star.style.top = "-10px";
  document.body.appendChild(star);

  const duration = 1200;
  const startTime = performance.now();

  function animateStar(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    star.style.transform = `translate(${progress * 300}px, ${progress * window.innerHeight}px)`;
    star.style.opacity = `${1 - progress}`;
    if (progress < 1) {
      requestAnimationFrame(animateStar);
    } else {
      star.remove();
    }
  }
  requestAnimationFrame(animateStar);
});
