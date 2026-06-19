// =========================================================================
//  PERSONALIZE HERE — edit the letter, memories, notes, and captions freely.
// =========================================================================
const CONFIG = {
  letter: `From the canals of Venice to the dance floor back home, you've made life feel
like one long, beautiful adventure. You taught us how to carry ourselves —
sharp suit, easy smile, and a heart that always makes room for everyone.

Thank you for the trips, the lessons, the laughter at 30,000 feet, and the
quiet steadiness behind all of it. We're lucky to have you.

Happy Father's Day. We love you — to the moon and back.`,

  // Each memory pairs a short caption with a photo for the scrapbook section.
  memories: [
    { text: "Gondolas and green canals — Venice never stood a chance against your panama hat.", photo: "photos/venice-church.jpg" },
    { text: "First-class shenanigans at 30,000 feet. Best travel buddy, hands down.", photo: "photos/flight-laugh.jpg" },
    { text: "That burgundy tux. Absolute legend status.", photo: "photos/dad-tux.jpg" },
    { text: "Dinners that turned into hours of stories we never wanted to end.", photo: "photos/restaurant.jpg" },
    { text: "Dancing in white, surrounded by family and tradition.", photo: "photos/traditional-dance.jpg" },
    { text: "Teaching us, by example, how to move through the world with grace.", photo: "photos/dad-grey-suit.jpg" },
  ],

  // Optional notes from family — leave empty to hide the section, or add
  // entries like: { name: "Mum", relation: "your wife", text: "..." }
  notes: [],

  // Gallery photos — files live in /photos. Reorder or recaption as you like.
  photos: [
    { src: "photos/venice-church.jpg",     cap: "Venice — Grand Canal mornings" },
    { src: "photos/dad-tux.jpg",           cap: "The burgundy tux" },
    { src: "photos/flight-laugh.jpg",      cap: "Best seat in the house" },
    { src: "photos/venice-goldenhour.jpg", cap: "Golden hour on the water" },
    { src: "photos/dad-grey-suit.jpg",     cap: "Sharp as ever" },
    { src: "photos/venice-point.jpg",      cap: "This way to the next adventure" },
    { src: "photos/airport-son.jpg",       cap: "Travel buddies" },
    { src: "photos/dad-sons-2.jpg",        cap: "The three of us" },
    { src: "photos/venice-selfie.jpg",     cap: "Sunshine and the Grand Canal" },
    { src: "photos/restaurant.jpg",        cap: "Family dinners" },
    { src: "photos/traditional-dance.jpg", cap: "A night of tradition" },
    { src: "photos/venice-bridge.jpg",     cap: "By the Scalzi bridge" },
    { src: "photos/dad-cream-suit.jpg",    cap: "Effortless" },
    { src: "photos/flight-playful.jpg",    cap: "Cheers, from the clouds" },
    { src: "photos/festival.jpg",          cap: "Celebration in the streets" },
    { src: "photos/venice-dining.jpg",     cap: "La dolce vita" },
    { src: "photos/indoor-selfie.jpg",     cap: "Always together" },
    { src: "photos/mall.jpg",              cap: "Partners in everything" },
  ],
};

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Scroll reveals ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- Heart burst ----------
function burstHearts(anchorEl, count = 16) {
  if (REDUCED_MOTION) return;
  const burst = document.createElement("div");
  burst.className = "heart-burst";
  const cols = ["#c4622d", "#d99a4e", "#46695b", "#a84a1f", "#e0a96d"];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 220 - 110;
    const rot = Math.random() * 80 - 40;
    const dur = (1 + Math.random() * 0.6).toFixed(2);
    const delay = (Math.random() * 0.15).toFixed(2);
    const size = 10 + Math.random() * 12;
    const span = document.createElement("span");
    span.textContent = "♥";
    span.style.left = x + "px";
    span.style.fontSize = size + "px";
    span.style.color = cols[i % cols.length];
    span.style.setProperty("--r", rot + "deg");
    span.style.animation = `burstUp ${dur}s cubic-bezier(.2,.6,.4,1) ${delay}s forwards`;
    burst.appendChild(span);
  }
  anchorEl.appendChild(burst);
  setTimeout(() => burst.remove(), 2000);
}

// ---------- Envelope ----------
const envelope = document.getElementById("envelope");
const coverHint = document.getElementById("coverHint");
let opened = false;
envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  envelope.classList.add("opened");
  coverHint.classList.add("hidden");
  burstHearts(envelope, 18);
  setTimeout(() => {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 700);
});

// ---------- Typewriter letter ----------
const letterEl = document.getElementById("letterText");
let typed = false;
function typeLetter() {
  if (typed) return;
  typed = true;
  const text = CONFIG.letter;
  let i = 0;
  const timer = setInterval(() => {
    letterEl.textContent = text.slice(0, i++);
    if (i > text.length) {
      clearInterval(timer);
      letterEl.classList.add("done");
    }
  }, 16);
}
new IntersectionObserver((entries, obs) => {
  entries.forEach((e) => { if (e.isIntersecting) { typeLetter(); obs.disconnect(); } });
}, { threshold: 0.35 }).observe(document.getElementById("letter"));

// ---------- Pointer tilt (shared by scrapbook + gallery) ----------
function attachTilt(el, baseRotate = 0) {
  el.style.transform = `rotate(${baseRotate}deg)`;
  if (REDUCED_MOTION) return;
  const MAX = 9;
  function move(e) {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 2 * MAX;
    const rx = (0.5 - py) * 2 * MAX;
    el.style.transform =
      `rotate(${baseRotate}deg) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
    el.style.setProperty("--mx", px * 100 + "%");
    el.style.setProperty("--my", py * 100 + "%");
  }
  function enter() { el.classList.add("tilt"); }
  function leave() {
    el.classList.remove("tilt");
    el.style.transform = `rotate(${baseRotate}deg)`;
  }
  el.addEventListener("pointerenter", enter);
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerleave", leave);
}

// ---------- Memory scrapbook ----------
const scrapGrid = document.getElementById("scrapGrid");
const scrapRots = [-3, 2.5, -2, 3, -2.5, 2];
CONFIG.memories.forEach((memory, i) => {
  const item = document.createElement("div");
  item.className = "scrap-item reveal";
  const tape = document.createElement("span");
  tape.className = "paper-tape scrap-tape";
  tape.style.transform = `rotate(${i % 2 ? 5 : -6}deg)`;
  const img = document.createElement("img");
  img.src = memory.photo;
  img.alt = memory.text;
  img.loading = "lazy";
  const cap = document.createElement("p");
  cap.className = "scrap-cap";
  cap.textContent = memory.text;
  item.append(tape, img, cap);
  scrapGrid.appendChild(item);
  attachTilt(item, scrapRots[i % scrapRots.length]);
  revealObserver.observe(item);
});

// ---------- Gallery + Lightbox ----------
const grid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
let current = 0;

CONFIG.photos.forEach((photo, i) => {
  const item = document.createElement("div");
  item.className = "g-item";
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.cap;
  img.loading = "lazy";
  const cap = document.createElement("div");
  cap.className = "g-cap";
  cap.textContent = photo.cap;
  item.append(img, cap);
  item.addEventListener("click", () => openLightbox(i));
  grid.appendChild(item);
  attachTilt(item, ((i % 5) - 2) * 1.1);
});

function openLightbox(i) {
  current = (i + CONFIG.photos.length) % CONFIG.photos.length;
  const p = CONFIG.photos[current];
  lbImage.src = p.src;
  lbImage.alt = p.cap;
  lbCaption.textContent = p.cap;
  lightbox.classList.remove("hidden");
}
function closeLightbox() { lightbox.classList.add("hidden"); }

lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); openLightbox(current - 1); });
lightbox.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); openLightbox(current + 1); });
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("hidden")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") openLightbox(current - 1);
  if (e.key === "ArrowRight") openLightbox(current + 1);
});

// ---------- Notes ----------
if (CONFIG.notes.length) {
  const notesSection = document.getElementById("notes");
  const notesList = document.getElementById("notesList");
  notesSection.classList.remove("hidden");
  CONFIG.notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <div class="note-head">
        <div class="note-who">
          <span class="note-name">${note.name}</span>
          <span class="note-rel">${note.relation}</span>
        </div>
        <span class="note-chev">▾</span>
      </div>
      <div class="note-body"><p class="note-text">${note.text}</p></div>`;
    card.addEventListener("click", () => card.classList.toggle("open"));
    notesList.appendChild(card);
  });
}

// ---------- Finale heart burst ----------
document.getElementById("launchBtn").addEventListener("click", (e) => {
  burstHearts(e.currentTarget.parentElement, 18);
});
