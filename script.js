const radioYes = document.getElementById("radioYes");
const radioNo = document.getElementById("radioNo");

const kSisalto = document.getElementById("Ksisalto");
const eSisalto = document.getElementById("Esisalto");
const slidebar = document.getElementById("slidebar");
const allergiat = document.getElementById("allergiat");
const haku = document.getElementById("haku")

radioYes.addEventListener("change", () => {
  if (radioYes.checked) {
    kSisalto.classList.remove("hidden");
    eSisalto.classList.add("hidden")
    slidebar.classList.remove("hidden");
    allergiat.classList.remove("hidden");
    haku.classList.remove("hidden");
  }
});

radioNo.addEventListener("change", () => {
  if (radioNo.checked) {
    kSisalto.classList.add("hidden");
    eSisalto.classList.remove("hidden");
    slidebar.classList.remove("hidden");
    allergiat.classList.remove("hidden");
    haku.classList.remove("hidden");
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

function haeReseptit() {
  // Kun Gemini otetaan käyttöön myöhemmin
}