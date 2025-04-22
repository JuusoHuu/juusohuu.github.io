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

document.addEventListener("DOMContentLoaded", () => {
  const aikaSlider = document.getElementById("aika");
  const aikaArvo = document.getElementById("aikaArvo");

  // Päivitetään liukusäätimen arvo näytölle reaaliaikaisesti
  aikaSlider.addEventListener("input", function () {
    aikaArvo.textContent = this.value;
  });

  // Kuunnellaan haun painiketta
  document.getElementById("haku").addEventListener("click", async () => {
    const kaappiValinta = document.querySelector('input[name="jaakaappiSisalto"]:checked')?.value;
  
    let tuotteet = "";
    let vaihtoehto = "";
  
    if (kaappiValinta === "yes") {
      tuotteet = document.getElementById("tuote").value.trim();
    } else if (kaappiValinta === "no") {
      vaihtoehto = document.querySelector('input[name="vaihtoehto"]:checked')?.value || "";
    }
  
    // Nämä haetaan aina riippumatta kyllä/ei -valinnasta
    const aikaraja = document.getElementById("aika").value;
    const allergiat = document.getElementById("allergia").value.trim();
  
    const vastaukset = {
      kaytaKaapinSisaltoa: kaappiValinta,
      tuotteet: tuotteet,
      ruokatyyppi: vaihtoehto,
      aikaraja: Number(aikaraja),
      allergiat: allergiat
    };

    console.log(vastaukset);

    try {
      const promptti = `Käytä seuraavia ehtoja ja ehdota resepti:
    - Käytetään kaapin sisältöä: ${kaappiValinta === "yes" ? tuotteet : "ei"}
    - Ruokatyyppi: ${vaihtoehto || "ei määritelty"}
    - Aikaraja: ${aikaraja} minuuttia
    - Allergiat: ${allergiat || "ei"}.
    Anna lyhyt resepti.`;
    
      const response = await fetch("https://script.google.com/macros/s/AKfycbz6YVLbxFqyHCTaI9HtUAmpBi7KBqi7lMWt5YbI5xgrsfbr89nRNj7dyKudqQDBnNf0/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptti })
      });
    
      const data = await response.json();
      const vastaus = data.candidates[0].content.parts[0].text;
    
      alert("Geminin ehdotus:\n" + vastaus);
    } catch (err) {
      alert("Virhe vastauksessa: " + err.message);
    }
    });
  }); 