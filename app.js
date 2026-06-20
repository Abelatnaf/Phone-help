// =========================================================================
//  FOR DAD — a cinematic Father's Day film.
//  Everything you might want to change lives in CONFIG below: the scene
//  order, each photo, the words on screen, the letter, and the gallery.
//  Every line is written in plain, simple English with an Amharic (አማርኛ)
//  translation, so the film can be read in either language — tap the
//  language button at the top-left to switch.
// =========================================================================
const CONFIG = {
  // Optional background music. Drop an mp3 at this path (e.g. "audio/theme.mp3")
  // and the ♪ button appears automatically. Leave "" to hide it.
  musicSrc: "",

  // Small bits of interface text (title card + buttons), in both languages.
  ui: {
    filmKicker: { en: "a short film", am: "አጭር ፊልም" },
    title:      { en: "For Dad", am: "ለአባቴ" },
    begin:      { en: "press to begin", am: "ለመጀመር ይጫኑ" },
    tcSubFilm:  { en: "a little film, just for you", am: "ትንሽ ፊልም፣ ላንተ ብቻ" },
    tcSubSound: { en: "turn your sound on ♪", am: "ድምፅዎን ያብሩ ♪" },
    scroll:     { en: "scroll", am: "አሸብልል" },
    toAm: "አማርኛ",   // label shown when in English (tap → Amharic)
    toEn: "English", // label shown when in Amharic (tap → English)
  },

  // The typed letter at the heart of the film.
  letter: {
    dear: { en: "Dear Dad,", am: "ውድ አባዬ፣" },
    body: {
      en: `From Venice to the dance floor back home, you made everywhere feel
like home. You showed me how to be a man — a sharp suit, a kind smile,
and a big heart with room for everyone.

Thank you for the trips, the long lunches, the laughs on the plane,
and for always being there.`,
      am: `ከቬኒስ እስከ ቤታችን የዳንስ መድረክ ድረስ፣ የትም ቦታ እንደ ቤት እንዲሰማን
አደረግህ። ሰው መሆንን አሳየኸኝ — የተዋበ ልብስ፣ ደግ ፈገግታ፣ እና ለሁሉም
ቦታ ያለው ትልቅ ልብ።

ስለ ጉዞዎቹ፣ ስለ ረጅም ምሳዎቹ፣ በአውሮፕላን ላይ ስለ ሳቅነው፣
እና ሁልጊዜ ከጎኔ ስለ ሆንክ አመሰግናለሁ።`,
    },
    signOff: { en: "— with all my love,", am: "— በፍቅር ሁሉ፣" },
    signature: { en: "your kid", am: "ልጅህ" },
  },

  // The film, scene by scene. Types:
  //   'hero'    — opening title over a photo
  //   'caption' — a full-screen photo with a line (and optional kicker/chapter)
  //   'letter'  — the typed letter over a blurred photo
  //   'gallery' — the contact-sheet of every photo (uses `photos` below)
  //   'finale'  — the closing scene
  // Every line is { en, am } so it can show in either language.
  scenes: [
    { type: "hero", photo: "photos/traditional-dance.jpg", focus: "center 38%",
      eyebrow: { en: "a little gift for you", am: "ትንሽ ስጦታ ላንተ" },
      line: { en: "Happy\nFather's Day", am: "መልካም\nየአባቶች ቀን" },
      sub: { en: "To the man who always loves to dance.", am: "ሁልጊዜ መደነስ ለሚወደው ሰው።" } },

    { type: "caption", photo: "photos/dad-grey-suit.jpg", focus: "center 32%",
      line: { en: "Before I knew\nanything,\nI knew you.", am: "ምንም ከማወቄ\nበፊት፣\nአንተን አወቅሁ።" } },

    { type: "caption", photo: "photos/venice-church.jpg", focus: "center 62%",
      chapter: { en: "Part One — Away", am: "ክፍል አንድ — ሩቅ" },
      line: { en: "We went to see\nthe world,", am: "ዓለምን ለማየት\nሄድን፣" } },

    { type: "caption", photo: "photos/venice-goldenhour.jpg", focus: "center 72%",
      line: { en: "and we found it\non the water.", am: "በውሃው ላይም\nአገኘናት።" } },

    { type: "caption", photo: "photos/venice-point.jpg", focus: "center 55%",
      kicker: { en: "you always knew", am: "ሁልጊዜ ታውቅ ነበር" },
      line: { en: "which way to go.", am: "የትኛውን መንገድ\nእንደምንሄድ።" } },

    { type: "caption", photo: "photos/venice-dining.jpg", focus: "center 28%",
      kicker: { en: "the good life", am: "መልካም ኑሮ" },
      line: { en: "Long lunches.\nGood stories.", am: "ረጅም ምሳዎች።\nጥሩ ወጎች።" } },

    { type: "caption", photo: "photos/flight-laugh.jpg", focus: "center 55%",
      chapter: { en: "Part Two — The Sky", am: "ክፍል ሁለት — ሰማይ" },
      line: { en: "Being together\nwas the best part.", am: "አብሮ መሆን\nከሁሉ የተሻለው ነበር።" } },

    { type: "caption", photo: "photos/flight-playful.jpg", focus: "center 35%",
      line: { en: "High in the sky —\nstill the funniest\nperson I know.", am: "ሰማይ ላይም —\nከማውቃቸው ሁሉ\nበጣም አስቂኙ አንተ ነህ።" } },

    { type: "letter", photo: "photos/dad-tux.jpg", focus: "center 35%" },

    { type: "caption", photo: "photos/dad-cream-suit.jpg", focus: "center 32%",
      chapter: { en: "Part Three — Home", am: "ክፍል ሦስት — ቤት" },
      line: { en: "You taught me\nthat being kind\nis the best style.", am: "ደግ መሆን\nከሁሉ የተሻለ ዘይቤ\nእንደሆነ አስተማርከኝ።" } },

    { type: "caption", photo: "photos/hero-tux.jpg", focus: "center 36%",
      kicker: { en: "and somehow", am: "እንዴት እንደሆነ ባላውቅም" },
      line: { en: "you always know\nhow to light up\na room.", am: "ሁልጊዜ ክፍልን\nማድመቅ\nታውቅበታለህ።" } },

    { type: "caption", photo: "photos/festival.jpg", focus: "center 32%",
      line: { en: "You taught me\nwhere I come from.", am: "ከየት እንደመጣሁ\nአስተማርከኝ።" } },

    { type: "caption", photo: "photos/dad-sons-1.jpg", focus: "center 40%",
      chapter: { en: "Part Four — Us", am: "ክፍል አራት — እኛ" },
      line: { en: "I learned how to be\na good man\nby watching you.", am: "ጥሩ ሰው መሆንን\nአንተን እያየሁ\nተማርኩ።" } },

    { type: "gallery",
      title: { en: "Every Moment", am: "እያንዳንዱ ቅጽበት" },
      sub: { en: "tap a photo to see it", am: "ፎቶ ለማየት ይንኩ" } },

    { type: "finale", photo: "photos/dad-sons-2.jpg", focus: "center 35%",
      script: { en: "to the moon and back", am: "እስከ ጨረቃ ድረስ" },
      line: { en: "Happy Father's Day, Dad.", am: "መልካም የአባቶች ቀን፣ አባዬ።" },
      sub: { en: "I love you.", am: "እወድሃለሁ።" },
      button: { en: "Send love", am: "ፍቅር ላክ" },
      foot: { en: "made with ♥ · Father's Day 2026", am: "በ♥ የተሰራ · የአባቶች ቀን 2026" } },
  ],

  // Contact-sheet gallery — every photo, captioned in both languages.
  photos: [
    { src: "photos/venice-church.jpg",     cap: { en: "Grand Canal mornings", am: "የግራንድ ካናል ጠዋቶች" } },
    { src: "photos/dad-tux.jpg",           cap: { en: "The burgundy tux", am: "ወይን ጠጅ ሱፉ" } },
    { src: "photos/flight-laugh.jpg",      cap: { en: "Best seat in the house", am: "ምርጡ ወንበር" } },
    { src: "photos/venice-goldenhour.jpg", cap: { en: "Golden hour on the water", am: "በውሃው ላይ የወርቅ ሰዓት" } },
    { src: "photos/dad-grey-suit.jpg",     cap: { en: "Sharp as ever", am: "ሁሌም የተዋበ" } },
    { src: "photos/venice-point.jpg",      cap: { en: "This way to the adventure", am: "ወደ ጀብዱው በዚህ በኩል" } },
    { src: "photos/airport-son.jpg",       cap: { en: "Wheels up", am: "ጉዞ ጀመረ" } },
    { src: "photos/dad-sons-2.jpg",        cap: { en: "Family", am: "ቤተሰብ" } },
    { src: "photos/venice-selfie.jpg",     cap: { en: "Sunshine and the canal", am: "ፀሐይና ካናል" } },
    { src: "photos/restaurant.jpg",        cap: { en: "Family dinners", am: "የቤተሰብ እራት" } },
    { src: "photos/traditional-dance.jpg", cap: { en: "A night of tradition", am: "የባህል ምሽት" } },
    { src: "photos/venice-bridge.jpg",     cap: { en: "By the Scalzi bridge", am: "በስካልዚ ድልድይ አጠገብ" } },
    { src: "photos/dad-cream-suit.jpg",    cap: { en: "Effortless", am: "በቀላሉ ውብ" } },
    { src: "photos/flight-playful.jpg",    cap: { en: "Cheers, from the clouds", am: "ከደመናዎች ሰላምታ" } },
    { src: "photos/festival.jpg",          cap: { en: "Celebration in the streets", am: "በመንገድ ላይ በዓል" } },
    { src: "photos/venice-dining.jpg",     cap: { en: "La dolce vita", am: "መልካም ኑሮ" } },
    { src: "photos/indoor-selfie.jpg",     cap: { en: "Always together", am: "ሁልጊዜ አብረን" } },
    { src: "photos/mall.jpg",              cap: { en: "Partners in everything", am: "በሁሉም ነገር አጋሮች" } },
    { src: "photos/dad-sons-1.jpg",        cap: { en: "Like father", am: "እንደ አባት" } },
    { src: "photos/hero-tux.jpg",          cap: { en: "The one and only", am: "ብቸኛው" } },
  ],
};

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const film = document.getElementById("film");

// ----------------------------------------------------------------------
//  Language (English / Amharic)
// ----------------------------------------------------------------------
let LANG = "en";
// Pick the current language out of an { en, am } object.
function L(obj) { return obj ? (obj[LANG] ?? obj.en ?? "") : ""; }
// Make a text element that remembers both languages so it can be swapped live.
function makeText(tag, cls, obj) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (obj) {
    el.dataset.en = obj.en ?? "";
    el.dataset.am = obj.am ?? obj.en ?? "";
    el.textContent = LANG === "am" ? el.dataset.am : el.dataset.en;
  }
  return el;
}
// Tag an existing element (e.g. the static title card) with both languages.
function setI18n(el, obj) {
  if (!el || !obj) return;
  el.dataset.en = obj.en ?? "";
  el.dataset.am = obj.am ?? obj.en ?? "";
}

// ----------------------------------------------------------------------
//  Scene builders
// ----------------------------------------------------------------------
function bgFor(photo, focus) {
  const bg = document.createElement("div");
  bg.className = "scene-bg";
  // Blurred fill — covers the whole frame so there are no empty bars,
  // even when the photo's shape doesn't match the screen.
  const fill = document.createElement("img");
  fill.className = "bg-fill";
  fill.src = photo;
  fill.alt = "";
  if (focus) fill.style.objectPosition = focus;
  // Main photo. Portrait shots fill the frame (cover); landscape shots sit
  // in full over the blurred fill (contain), so nobody gets cropped out.
  // The orientation class is set once the real dimensions are known, and
  // `focus` frames the crop on the photos that fill.
  const main = document.createElement("img");
  main.className = "bg-main";
  main.src = photo;
  main.alt = "";
  if (focus) main.style.objectPosition = focus;
  const setOrient = () =>
    bg.classList.add(main.naturalHeight > main.naturalWidth ? "portrait" : "landscape");
  if (main.complete && main.naturalWidth) setOrient();
  else main.addEventListener("load", setOrient, { once: true });
  bg.append(fill, main);
  return bg;
}
function scrim() {
  const s = document.createElement("div");
  s.className = "scene-scrim";
  return s;
}

function buildHero(s) {
  const sec = document.createElement("section");
  sec.className = "scene scene-hero";
  sec.append(bgFor(s.photo, s.focus), scrim());
  const c = document.createElement("div");
  c.className = "scene-content";
  if (s.eyebrow) c.appendChild(makeText("p", "sc-eyebrow", s.eyebrow));
  c.appendChild(makeText("h1", "sc-line", s.line));
  if (s.sub) c.appendChild(makeText("p", "sc-sub", s.sub));
  sec.appendChild(c);
  const cue = document.createElement("div");
  cue.className = "scroll-cue";
  cue.appendChild(makeText("span", null, CONFIG.ui.scroll));
  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.textContent = "↓";
  cue.appendChild(arrow);
  sec.appendChild(cue);
  return sec;
}

function buildCaption(s) {
  const sec = document.createElement("section");
  sec.className = "scene scene-caption";
  sec.append(bgFor(s.photo, s.focus), scrim());
  const c = document.createElement("div");
  c.className = "scene-content";
  if (s.chapter) c.appendChild(makeText("span", "chapter-pill", s.chapter));
  if (s.kicker) c.appendChild(makeText("p", "sc-kicker", s.kicker));
  c.appendChild(makeText("p", "sc-line", s.line));
  if (s.sub) c.appendChild(makeText("p", "sc-sub", s.sub));
  sec.appendChild(c);
  return sec;
}

function buildLetter(s) {
  const sec = document.createElement("section");
  sec.className = "scene scene-letter";
  sec.append(bgFor(s.photo, s.focus), scrim());
  const paper = document.createElement("div");
  paper.className = "letter-paper scene-content";
  const tape = document.createElement("span");
  tape.className = "letter-tape";
  const body = document.createElement("p");
  body.className = "letter-body";
  body.id = "letterBody";
  paper.append(
    tape,
    makeText("p", "letter-dear", CONFIG.letter.dear),
    body,
    makeText("p", "letter-signoff", CONFIG.letter.signOff),
    makeText("p", "letter-sign", CONFIG.letter.signature),
  );
  sec.appendChild(paper);
  return sec;
}

function buildGallery(s) {
  const sec = document.createElement("section");
  sec.className = "scene scene-gallery";
  const head = document.createElement("div");
  head.className = "gallery-head";
  head.appendChild(makeText("h2", "gallery-title", s.title));
  if (s.sub) head.appendChild(makeText("p", "gallery-sub", s.sub));
  const grid = document.createElement("div");
  grid.className = "gallery-grid";
  grid.id = "galleryGrid";
  sec.append(head, grid);
  return sec;
}

function buildFinale(s) {
  const sec = document.createElement("section");
  sec.className = "scene scene-finale";
  sec.append(bgFor(s.photo, s.focus), scrim());
  const c = document.createElement("div");
  c.className = "scene-content";
  const heart = document.createElement("div");
  heart.className = "finale-heart";
  heart.textContent = "♥";
  c.appendChild(heart);
  c.appendChild(makeText("h2", "sc-line", s.line));
  if (s.script) c.appendChild(makeText("p", "finale-script", s.script));
  if (s.sub) c.appendChild(makeText("p", "sc-sub", s.sub));
  const btnWrap = document.createElement("div");
  const btn = makeText("button", "launch-btn", s.button);
  btn.id = "launchBtn";
  btnWrap.appendChild(btn);
  c.appendChild(btnWrap);
  c.appendChild(makeText("p", "finale-foot", s.foot));
  sec.appendChild(c);
  return sec;
}

const BUILDERS = { hero: buildHero, caption: buildCaption, letter: buildLetter, gallery: buildGallery, finale: buildFinale };
const sceneEls = [];
CONFIG.scenes.forEach((s, i) => {
  const el = (BUILDERS[s.type] || buildCaption)(s);
  el.dataset.index = i;
  // first photo loads eagerly, rest lazily
  el.querySelectorAll(".scene-bg img").forEach((img) => {
    img.loading = i <= 1 ? "eager" : "lazy";
  });
  film.appendChild(el);
  sceneEls.push(el);
});

// ----------------------------------------------------------------------
//  Scroll progress
// ----------------------------------------------------------------------
const progressFill = document.getElementById("progressFill");
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progressFill.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
}

// ----------------------------------------------------------------------
//  Parallax (rAF-throttled) + active/seen toggling
// ----------------------------------------------------------------------
let ticking = false;
function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      updateProgress();
      if (!REDUCED_MOTION) {
        const vh = window.innerHeight;
        for (const el of sceneEls) {
          const bg = el.querySelector(".scene-bg");
          if (!bg) continue;
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          const prog = (r.top + r.height / 2 - vh / 2) / vh; // -1..1-ish
          bg.style.transform = `translateY(${(-prog * 6).toFixed(2)}%)`;
        }
      }
      ticking = false;
    });
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);

const sceneObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("active", "seen");
      if (e.target.classList.contains("scene-letter")) typeLetter();
    } else {
      e.target.classList.remove("active");
    }
  });
}, { threshold: 0.5 });
sceneEls.forEach((el) => sceneObserver.observe(el));

// ----------------------------------------------------------------------
//  Typewriter letter
// ----------------------------------------------------------------------
let typed = false;
let letterTimer = null;
function typeLetter() {
  if (typed) return;
  const body = document.getElementById("letterBody");
  if (!body) return;
  typed = true;
  const text = L(CONFIG.letter.body);
  if (REDUCED_MOTION) { body.textContent = text; body.classList.add("done"); return; }
  let i = 0;
  letterTimer = setInterval(() => {
    body.textContent = text.slice(0, i++);
    if (i > text.length) { clearInterval(letterTimer); letterTimer = null; body.classList.add("done"); }
  }, 18);
}

// ----------------------------------------------------------------------
//  Language switch
// ----------------------------------------------------------------------
const langToggle = document.getElementById("langToggle");
function applyLang(lang) {
  LANG = lang === "am" ? "am" : "en";
  document.documentElement.lang = LANG;
  document.body.classList.toggle("am", LANG === "am");
  // Swap every bilingual text element.
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = LANG === "am" ? el.dataset.am : el.dataset.en;
  });
  // The letter types itself, so it has no data-en — handle it directly.
  const body = document.getElementById("letterBody");
  if (body && typed) {
    if (letterTimer) { clearInterval(letterTimer); letterTimer = null; }
    body.textContent = L(CONFIG.letter.body);
    body.classList.add("done");
  }
  // Keep an open lightbox caption in sync.
  if (lbCaption && lightbox && !lightbox.classList.contains("hidden")) {
    lbCaption.textContent = L(CONFIG.photos[current].cap);
  }
  // The button shows the language you'd switch TO.
  if (langToggle) langToggle.textContent = LANG === "am" ? CONFIG.ui.toEn : CONFIG.ui.toAm;
}
// Seed the static title card from CONFIG, then sync everything.
setI18n(document.querySelector(".tc-kicker"), CONFIG.ui.filmKicker);
setI18n(document.querySelector(".tc-title"), CONFIG.ui.title);
setI18n(document.getElementById("beginBtn"), CONFIG.ui.begin);
if (langToggle) langToggle.addEventListener("click", () => applyLang(LANG === "am" ? "en" : "am"));

// ----------------------------------------------------------------------
//  Gallery + lightbox
// ----------------------------------------------------------------------
const grid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
let current = 0;

function attachTilt(el) {
  if (REDUCED_MOTION) return;
  const MAX = 8;
  el.addEventListener("pointerenter", () => el.classList.add("tilt"));
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 2 * MAX;
    const rx = (0.5 - py) * 2 * MAX;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
    el.style.setProperty("--mx", px * 100 + "%");
    el.style.setProperty("--my", py * 100 + "%");
  });
  el.addEventListener("pointerleave", () => { el.classList.remove("tilt"); el.style.transform = ""; });
}

if (grid) {
  CONFIG.photos.forEach((photo, i) => {
    const item = document.createElement("div");
    item.className = "g-item";
    const frame = document.createElement("div");
    frame.className = "g-frame";
    const img = document.createElement("img");
    img.src = photo.src; img.alt = L(photo.cap); img.loading = "lazy";
    frame.appendChild(img);
    const cap = makeText("div", "g-cap", photo.cap);
    item.append(frame, cap);
    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
    attachTilt(item);
  });
}

function openLightbox(i) {
  current = (i + CONFIG.photos.length) % CONFIG.photos.length;
  const p = CONFIG.photos[current];
  lbImage.src = p.src; lbImage.alt = L(p.cap); lbCaption.textContent = L(p.cap);
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

// ----------------------------------------------------------------------
//  Heart burst + finale button
// ----------------------------------------------------------------------
function burstHearts(anchorEl, count = 18) {
  if (REDUCED_MOTION || !anchorEl) return;
  const burst = document.createElement("div");
  burst.className = "heart-burst";
  const cols = ["#c4622d", "#e0a96d", "#46695b", "#a84a1f", "#f0d2a0"];
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = "♥";
    span.style.left = (Math.random() * 240 - 120) + "px";
    span.style.fontSize = (10 + Math.random() * 13) + "px";
    span.style.color = cols[i % cols.length];
    span.style.setProperty("--r", (Math.random() * 80 - 40) + "deg");
    span.style.animation = `burstUp ${(1 + Math.random() * 0.6).toFixed(2)}s cubic-bezier(.2,.6,.4,1) ${(Math.random() * 0.15).toFixed(2)}s forwards`;
    burst.appendChild(span);
  }
  anchorEl.appendChild(burst);
  setTimeout(() => burst.remove(), 2000);
}
const launchBtn = document.getElementById("launchBtn");
if (launchBtn) {
  launchBtn.addEventListener("click", (e) => burstHearts(e.currentTarget.parentElement, 24));
  if (!REDUCED_MOTION) {
    launchBtn.addEventListener("pointermove", (e) => {
      const r = launchBtn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
      launchBtn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
    });
    launchBtn.addEventListener("pointerleave", () => { launchBtn.style.transform = ""; });
  }
}

// ----------------------------------------------------------------------
//  Ambient particles (warm dust drifting up)
// ----------------------------------------------------------------------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let motes = [];
function resizeParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 26000));
  motes = Array.from({ length: count }, () => spawnMote(true));
}
function spawnMote(initial) {
  return {
    x: Math.random() * canvas.width,
    y: initial ? Math.random() * canvas.height : canvas.height + 10,
    r: Math.random() * 1.8 + 0.5,
    vy: -(Math.random() * 0.25 + 0.06),
    vx: (Math.random() - 0.5) * 0.18,
    a: Math.random() * 0.4 + 0.15,
    phase: Math.random() * Math.PI * 2,
  };
}
function drawParticles(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const m of motes) {
    const tw = 0.6 + 0.4 * Math.sin(t / 900 + m.phase);
    ctx.globalAlpha = m.a * tw;
    ctx.fillStyle = m.r > 1.4 ? "#f0d2a0" : "#e9d9bd";
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
    ctx.fill();
    m.y += m.vy; m.x += m.vx + Math.sin(t / 1400 + m.phase) * 0.15;
    if (m.y < -10 || m.x < -10 || m.x > canvas.width + 10) Object.assign(m, spawnMote(false));
  }
  requestAnimationFrame(drawParticles);
}
let particlesStarted = false;
function startParticles() {
  if (particlesStarted || REDUCED_MOTION) return;
  particlesStarted = true;
  resizeParticles();
  canvas.classList.add("on");
  window.addEventListener("resize", resizeParticles);
  requestAnimationFrame(drawParticles);
}

// ----------------------------------------------------------------------
//  Optional music
// ----------------------------------------------------------------------
let audio = null, playing = false;
const soundToggle = document.getElementById("soundToggle");
if (CONFIG.musicSrc) {
  audio = new Audio(CONFIG.musicSrc);
  audio.loop = true; audio.volume = 0;
  soundToggle.classList.add("show");
  soundToggle.addEventListener("click", () => {
    if (playing) { fadeAudio(0); soundToggle.textContent = "♪"; }
    else { audio.play().then(() => fadeAudio(0.5)).catch(() => {}); soundToggle.textContent = "✕"; }
    playing = !playing;
  });
}
function fadeAudio(target) {
  if (!audio) return;
  const step = target > audio.volume ? 0.02 : -0.02;
  const id = setInterval(() => {
    audio.volume = Math.min(1, Math.max(0, audio.volume + step));
    if ((step > 0 && audio.volume >= target) || (step < 0 && audio.volume <= target)) {
      audio.volume = target; clearInterval(id);
      if (target === 0) audio.pause();
    }
  }, 30);
}

// ----------------------------------------------------------------------
//  Title card → begin
// ----------------------------------------------------------------------
const titleCard = document.getElementById("titleCard");
const beginBtn = document.getElementById("beginBtn");
// keep the title-card line honest about whether there's sound
setI18n(titleCard.querySelector(".tc-sub"), CONFIG.musicSrc ? CONFIG.ui.tcSubSound : CONFIG.ui.tcSubFilm);
// sync all interface + scene text to the starting language
applyLang(LANG);
function begin() {
  titleCard.classList.add("gone");
  document.body.classList.remove("locked");
  window.scrollTo(0, 0);
  startParticles();
  // mark the hero seen/active immediately so it animates in
  if (sceneEls[0]) sceneEls[0].classList.add("active", "seen");
  onScroll();
  if (audio) { audio.play().then(() => { fadeAudio(0.5); playing = true; soundToggle.textContent = "✕"; }).catch(() => {}); }
}
beginBtn.addEventListener("click", begin);
titleCard.addEventListener("click", (e) => { if (e.target === titleCard) begin(); });
