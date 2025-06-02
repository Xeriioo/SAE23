const codePostalInput    = document.getElementById("code-postal");
const communeSelect      = document.getElementById("communeSelect");
const villeBlock         = document.getElementById("villeBlock");
const validationButton   = document.getElementById("validationButton");
const errorElement       = document.getElementById("error");
const optionsMeteo       = document.getElementById("optionsMeteo");
const chkLatitude        = document.getElementById("chkLatitude");
const chkLongitude       = document.getElementById("chkLongitude");
const chkPluie           = document.getElementById("chkPluie");
const chkVentMoyen       = document.getElementById("chkVentMoyen");
const chkDirVent         = document.getElementById("chkDirVent");
const unitBlock          = document.getElementById("unitBlock");
const unitSelect         = document.getElementById("unitSelect");

function estCodePostalValide(code) {
  return /^[0-9]{5}$/.test(code);
}

function reinitialiserSelectEtMasquerBloc() {
  communeSelect.innerHTML = '<option disabled selected>Choisissez une ville</option>';
  villeBlock.classList.add("hidden");
  optionsMeteo.classList.add("hidden");
  unitBlock.classList.add("hidden");
}

codePostalInput.addEventListener("input", async () => {
  errorElement.textContent = "";
  const codePostal = codePostalInput.value.trim();

  if (codePostal.length < 5) {
    reinitialiserSelectEtMasquerBloc();
    return;
  }

  if (!estCodePostalValide(codePostal)) {
    errorElement.textContent = "Le code postal doit contenir exactement 5 chiffres.";
    reinitialiserSelectEtMasquerBloc();
    return;
  }

  try {
    const urlGeoApi = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}&fields=nom,code&format=json`;
    const response = await fetch(urlGeoApi);
    if (!response.ok) {
      throw new Error(`Geo Gouv : status ${response.status}`);
    }
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      errorElement.textContent = "Aucune commune trouvée pour ce code postal.";
      reinitialiserSelectEtMasquerBloc();
      return;
    }

    const communesUniquesMap = new Map();
    data.forEach(obj => {
      if (!communesUniquesMap.has(obj.code)) {
        communesUniquesMap.set(obj.code, obj.nom);
      }
    });

    communeSelect.innerHTML = '<option disabled selected>Choisissez une ville</option>';
    communesUniquesMap.forEach((nomVille, insee) => {
      const option = document.createElement("option");
      option.value = insee;
      option.textContent = nomVille;
      communeSelect.appendChild(option);
    });

    villeBlock.classList.remove("hidden");
    optionsMeteo.classList.remove("hidden");
    unitBlock.classList.remove("hidden");

  } catch (err) {
    console.error("Erreur Geo Gouv :", err);
    errorElement.textContent = "Impossible de récupérer les communes. Réessayez plus tard.";
    reinitialiserSelectEtMasquerBloc();
  }
});

validationButton.addEventListener("click", () => {
  errorElement.textContent = "";
  const selectedInsee = communeSelect.value;

  if (!selectedInsee) {
    errorElement.textContent = "Veuillez choisir une ville dans la liste.";
    return;
  }

  const optionsAffichage = {
    showLatitude:   chkLatitude.checked,
    showLongitude:  chkLongitude.checked,
    showPluie:      chkPluie.checked,
    showVentMoyen:  chkVentMoyen.checked,
    showDirVent:    chkDirVent.checked
  };

  const unit = unitSelect ? unitSelect.value : "C";
  createCard(selectedInsee, optionsAffichage, unit);

});

function initTheme() {
  const storedTheme = localStorage.getItem("theme");
  const checkbox = document.getElementById("themeCheckbox");
  if (storedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (checkbox) checkbox.checked = true;
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (checkbox) checkbox.checked = false;
  }
}

function toggleTheme() {
  const checkbox = document.getElementById("themeCheckbox");
  if (!checkbox) return;
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const themeCheckbox = document.getElementById("themeCheckbox");
  if (themeCheckbox) {
    themeCheckbox.addEventListener("change", toggleTheme);
  }
});