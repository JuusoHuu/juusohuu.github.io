const radioYes = document.getElementById("radioYes");
const radioNo = document.getElementById("radioNo");

const sisalto = document.getElementById("sisalto");
const slidebar = document.getElementById("slidebar");
const allergiat = document.getElementById("allergiat");
const haku = document.getElementById("haku")

radioYes.addEventListener("change", () => {
  if (radioYes.checked) {
    sisalto.classList.remove("hidden");
    slidebar.classList.remove("hidden");
    allergiat.classList.remove("hidden");
    haku.classList.remove("hidden");
  }
});

radioNo.addEventListener("change", () => {
  if (radioNo.checked) {
    sisalto.classList.add("hidden");
    slidebar.classList.add("hidden");
    allergiat.classList.add("hidden");
    haku.classList.add("hidden");
  }
});

const slider = document.getElementById("aika");
const aikaArvo = document.getElementById("aikaArvo");

slider.addEventListener("input", () => {
  aikaArvo.textContent = slider.value;
});

const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-lista');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙'; 
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
  }
});


function haeReseptit() {
  // Kun Gemini otetaan käyttöön myöhemmin
}