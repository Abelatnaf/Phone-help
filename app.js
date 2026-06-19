// =========================================================================
//  PERSONALIZE HERE — edit the letter, lessons, memories, notes & captions.
// =========================================================================
const CONFIG = {
  letter: `From the canals of Venice to the dance floor back home, you've made life feel
like one long, beautiful adventure. You taught us how to carry ourselves —
sharp suit, easy smile, and a heart that always makes room for everyone.

Thank you for the trips, the lessons, the laughter at 30,000 feet, and the
quiet steadiness behind all of it. We're lucky to have you.`,

  signature: "your kids",

  // "What you taught us" checklist.
  lessons: [
    "To carry ourselves with grace — sharp suit, easy smile.",
    "That the table always has room for one more.",
    "How to turn a long flight into the best part of the trip.",
    "To work hard, then dance like nobody's watching.",
    "That style, really, is just kindness — well dressed.",
  ],

  // Pull-quote shown on the coloured band.
  quote: "Anywhere in the world, the best view was always the one with you in it.",

  // Scrapbook — each memory pairs a caption with a photo.
  memories: [
    { text: "Gondolas and green canals — Venice never stood a chance against your panama hat.", photo: "photos/venice-church.jpg" },
    { text: "First-class shenanigans at 30,000 feet. Best travel buddy, hands down.", photo: "photos/flight-laugh.jpg" },
    { text: "That burgundy tux. Absolute legend status.", photo: "photos/dad-tux.jpg" },
    { text: "Dinners that turned into hours of stories we never wanted to end.", photo: "photos/restaurant.jpg" },
    { text: "Dancing in white, surrounded by family and tradition.", photo: "photos/traditional-dance.jpg" },
    { text: "Teaching us, by example, how to move through the world with grace.", photo: "photos/dad-grey-suit.jpg" },
  ],

  // Horizontal "postcards" filmstrip.
  postcards: [
    { src: "photos/venice-goldenhour.jpg", cap: "Golden hour" },
    { src: "photos/venice-point.jpg",      cap: "This way!" },
    { src: "photos/venice-bridge.jpg",     cap: "Scalzi bridge" },
    { src: "photos/venice-selfie.jpg",     cap: "Grand Canal" },
    { src: "photos/airport-son.jpg",       cap: "Wheels up" },
    { src: "photos/flight-playful.jpg",    cap: "Cheers!" },
    { src: "photos/venice-dining.jpg",     cap: "La dolce vita" },
    { src: "photos/mall.jpg",              cap: "Partners in everything" },
  ],

  // Optional notes from family — leave empty to hide the section.
  notes: [],

  // Gallery photos.
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

// Apply text config
document.getElementById("signature").textContent = CONFIG.signature;
document.querySelector(".quote-text").textContent = CONFIG.quote;

// ---------- Scroll progress thread ----------
const progressFill = document.getElementById("progressFill");
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? (window.scrollY / h) * 100 : 0;
  progressFill.style.width = p + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// ---------- Scroll reveals (all variants) ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
}, { threshold: 0.18 });
function observeReveals(root = document) {
  root.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    .forEach((el) => revealObserver.observe(el));
}
observeReveals();

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
  burstHearts(envelope, 20);
  setTimeout(() => {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 720);
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

// ---------- Lessons ----------
const lessonsList = document.getElementById("lessonsList");
CONFIG.lessons.forEach((lesson, i) => {
  const li = document.createElement("li");
  li.className = "reveal-left";
  li.style.setProperty("--d", (i * 0.08) + "s");
  li.textContent = lesson;
  lessonsList.appendChild(li);
  revealObserver.observe(li);
});

// ---------- Pointer tilt (scrapbook + gallery) ----------
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
  el.addEventListener("pointerenter", () => el.classList.add("tilt"));
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerleave", () => {
    el.classList.remove("tilt");
    el.style.transform = `rotate(${baseRotate}deg)`;
  });
}

// ---------- Memory scrapbook ----------
const scrapGrid = document.getElementById("scrapGrid");
const scrapRots = [-3, 2.5, -2, 3, -2.5, 2];
CONFIG.memories.forEach((memory, i) => {
  const item = document.createElement("div");
  item.className = "scrap-item reveal-scale";
  item.style.setProperty("--d", ((i % 2) * 0.08) + "s");
  const tape = document.createElement("span");
  tape.className = "paper-tape scrap-tape";
  tape.style.transform = `rotate(${i % 2 ? 5 : -6}deg)`;
  const frame = document.createElement("div");
  frame.className = "scrap-frame";
  const img = document.createElement("img");
  img.src = memory.photo;
  img.alt = memory.text;
  img.loading = "lazy";
  frame.appendChild(img);
  const cap = document.createElement("p");
  cap.className = "scrap-cap";
  cap.textContent = memory.text;
  item.append(tape, frame, cap);
  scrapGrid.appendChild(item);
  attachTilt(item, scrapRots[i % scrapRots.length]);
  revealObserver.observe(item);
});

// ---------- Postcards filmstrip (drag + auto-scroll) ----------
const filmstrip = document.getElementById("filmstrip");
const filmTrack = document.getElementById("filmTrack");
const filmRots = [-2.5, 1.8, -1.5, 2.4, -2, 1.4, -1.8, 2];
CONFIG.postcards.forEach((pc, i) => {
  const card = document.createElement("div");
  card.className = "film-card";
  card.style.setProperty("--rot", filmRots[i % filmRots.length] + "deg");
  const img = document.createElement("img");
  img.src = pc.src;
  img.alt = pc.cap;
  img.loading = "lazy";
  const cap = document.createElement("div");
  cap.className = "film-cap";
  cap.textContent = pc.cap;
  card.append(img, cap);
  // open in lightbox using the matching gallery index when possible
  card.addEventListener("click", () => {
    if (justDragged) return;
    const gi = CONFIG.photos.findIndex((p) => p.src === pc.src);
    openLightbox(gi >= 0 ? gi : 0);
  });
  filmTrack.appendChild(card);
});

// drag-to-scroll
let isDown = false, startX = 0, startScroll = 0, justDragged = false;
filmstrip.addEventListener("pointerdown", (e) => {
  isDown = true; justDragged = false;
  filmstrip.classList.add("dragging");
  startX = e.clientX;
  startScroll = filmstrip.scrollLeft;
});
filmstrip.addEventListener("pointermove", (e) => {
  if (!isDown) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 4) justDragged = true;
  filmstrip.scrollLeft = startScroll - dx;
});
function endDrag() { isDown = false; filmstrip.classList.remove("dragging"); }
filmstrip.addEventListener("pointerup", endDrag);
filmstrip.addEventListener("pointerleave", endDrag);

// gentle auto-scroll until the user interacts
let autoScroll = !REDUCED_MOTION;
["pointerdown", "wheel", "touchstart"].forEach((ev) =>
  filmstrip.addEventListener(ev, () => { autoScroll = false; }, { passive: true }));
function tickFilm() {
  if (autoScroll) {
    const max = filmstrip.scrollWidth - filmstrip.clientWidth;
    if (max > 0) {
      filmstrip.scrollLeft += 0.4;
      if (filmstrip.scrollLeft >= max - 1) autoScroll = false;
    }
  }
  requestAnimationFrame(tickFilm);
}
requestAnimationFrame(tickFilm);

// ---------- Gallery + Lightbox ----------
const grid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
let current = 0;

CONFIG.photos.forEach((photo, i) => {
  const item = document.createElement("div");
  item.className = "g-item";
  const frame = document.createElement("div");
  frame.className = "g-frame";
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.cap;
  img.loading = "lazy";
  frame.appendChild(img);
  const cap = document.createElement("div");
  cap.className = "g-cap";
  cap.textContent = photo.cap;
  item.append(frame, cap);
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

// ---------- Finale: magnetic button + heart burst ----------
const launchBtn = document.getElementById("launchBtn");
launchBtn.addEventListener("click", (e) => burstHearts(e.currentTarget.parentElement, 22));
if (!REDUCED_MOTION) {
  launchBtn.addEventListener("pointermove", (e) => {
    const r = launchBtn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
    launchBtn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
  });
  launchBtn.addEventListener("pointerleave", () => { launchBtn.style.transform = ""; });
}
