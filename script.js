// Console greeting for devs
console.log("👋 Hello there! Thanks for checking out my portfolio.");

// Theme toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-theme');

  const btn = document.getElementById('themeToggleBtn');
  btn.textContent = body.classList.contains('light-theme') ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Show/hide contact box
function toggleContact() {
  const contactBox = document.getElementById('contact-box');
  if (contactBox.style.display === "none") {
    contactBox.style.display = "block";
  } else {
    contactBox.style.display = "none";
  }
}

// Automatically show buttons when JS is loaded
window.onload = () => {
  const toggleArea = document.createElement("div");
  toggleArea.style.marginTop = "20px";

  const themeBtn = document.createElement("button");
  themeBtn.id = "themeToggleBtn";
  themeBtn.innerText = "☀️ Light Mode";
  themeBtn.onclick = toggleTheme;
  themeBtn.style.marginRight = "10px";

  const contactBtn = document.createElement("button");
  contactBtn.innerText = "📞 Toggle Contact Info";
  contactBtn.onclick = toggleContact;

  toggleArea.appendChild(themeBtn);
  toggleArea.appendChild(contactBtn);

  const main = document.getElementById("main");
  main.insertBefore(toggleArea, main.firstChild);
};
