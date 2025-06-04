// Typing Effect
const phrases = ["Web Developer", "Designer", "Creator", "Tech Enthusiast"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

function loop() {
  typedText.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 80 : 120);
}
loop();

// Fade-in on scroll
const sectionTitles = document.querySelectorAll("section h2");

function revealTitlesOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sectionTitles.forEach(title => {
    const titleTop = title.getBoundingClientRect().top;
    if (titleTop < triggerBottom) {
      title.classList.add("slide-in");
    }
  });
}
window.addEventListener("scroll", revealTitlesOnScroll);
revealTitlesOnScroll(); // run once on load


// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});
// Smooth scroll on nav link click
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const cards = document.querySelectorAll(".card");

function animateCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach((card, idx) => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.style.transitionDelay = `${idx * 150}ms`;
      card.classList.add("show-card");
    }
  });
}

window.addEventListener("scroll", animateCards);
animateCards();

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scroll-bar");
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const width = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = `${width}%`;
});
