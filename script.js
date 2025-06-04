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
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});
