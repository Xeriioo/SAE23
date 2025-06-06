// Récupération des éléments du DOM via leurs IDs
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

/**
 * Vérifie si le code postal correspond exactement à 5 chiffres.
 * - On utilise la méthode trim() pour supprimer les espaces éventuels en début/fin.
 * - L'expression régulière /^\d{5}$/ vérifie que la chaîne contient 5 chiffres et rien d'autre.
 * @param {string} code - Chaîne saisie par l'utilisateur.
 * @returns {boolean} - true si le format est valide, false sinon.
 */
function estCodePostalValide(code) {
  const cp = code.trim();
  console.log(cp);
  console.log(/^\d{5}$/.test(cp)); // Affiche true/false dans la console pour débogage
  return /^\d{5}$/.test(cp);
}

/**
 * Réinitialise la liste déroulante des communes et masque les blocs dépendants.
 * Utilisé lorsqu'une erreur est détectée ou qu'on souhaite repartir d'une saisie vierge.
 */
function reinitialiserSelectEtMasquerBloc() {
  // Remet le <select> à son option par défaut
  communeSelect.innerHTML = '<option disabled selected>Choisissez une ville</option>';
  // Ajoute la classe "hidden" pour masquer ces blocs (CSS : display: none)
  villeBlock.classList.add("hidden");
  optionsMeteo.classList.add("hidden");
  unitBlock.classList.add("hidden");
}

/**
 * Événement déclenché à chaque saisie dans le champ "code postal".
 * - On efface d'abord tout message d'erreur précédent.
 * - On vérifie la longueur : si < 5, on affiche un message et on réinitialise.
 * - On vérifie le format exact (5 chiffres) via estCodePostalValide.
 * - Si tout est bon, on appelle l'API GeoGouv pour récupérer la liste des communes.
 * - Gère les cas d'erreur (statut HTTP non ok, réponse vide, etc.).
 */
codePostalInput.addEventListener("input", async () => {
  // On vide le message d'erreur pour ne pas cumuler les anciens messages
  errorElement.textContent = "";
  const codePostal = codePostalInput.value.trim();

  // Si la longueur est inférieure à 5 caractères, on court-circuite
  if (codePostal.length < 5) {
    errorElement.textContent = "Le code postal doit contenir exactement 5 chiffres.";
    reinitialiserSelectEtMasquerBloc();
    return;
  }

  // Vérification stricte du format 5 chiffres
  if (!estCodePostalValide(codePostal)) {
    errorElement.textContent = "Le code postal doit contenir exactement 5 chiffres.";
    reinitialiserSelectEtMasquerBloc();
    return;
  }

  try {
    // Construction de l'URL pour l'API GeoGouv (récupère nom et code INSEE des communes)
    const urlGeoApi = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}&fields=nom,code&format=json`;
    const response = await fetch(urlGeoApi);

    // Si le serveur renvoie autre chose qu'un status 200-299, on lève une erreur
    if (!response.ok) {
      throw new Error(`Geo Gouv : status ${response.status}`);
    }

    const data = await response.json();

    // Si le tableau retourné n'est pas valide ou vide, on affiche un message
    if (!Array.isArray(data) || data.length === 0) {
      errorElement.textContent = "Aucune commune trouvée pour ce code postal.";
      reinitialiserSelectEtMasquerBloc();
      return;
    }

    /**
     * Dans certaines situations, plusieurs objets pour la même commune
     * peuvent apparaître. On utilise un Map pour ne garder qu'une entrée
     * (clé = code INSEE, valeur = nom de la commune), ce qui garantit
     * l'unicité et permet d'éviter les doublons dans la liste déroulante.
     */
    const communesUniquesMap = new Map();
    data.forEach(obj => {
      // Si le Map n'a pas déjà ce code INSEE, on l'ajoute
      if (!communesUniquesMap.has(obj.code)) {
        communesUniquesMap.set(obj.code, obj.nom);
      }
    });

    // Reconstruit la <select> : option par défaut + options pour chaque commune unique
    communeSelect.innerHTML = '<option disabled selected value="">Choisissez une ville</option>';
    communesUniquesMap.forEach((nomVille, insee) => {
      const option = document.createElement("option");
      option.value = insee;        // code INSEE utilisé pour les futures requêtes météo
      option.textContent = nomVille; // nom affiché à l'utilisateur
      communeSelect.appendChild(option);
    });

    // On affiche les blocs "Ville" (sélecteur), "Options Méteo" et "Unité"
    villeBlock.classList.remove("hidden");
    optionsMeteo.classList.remove("hidden");
    unitBlock.classList.remove("hidden");

  } catch (err) {
    // En cas d'erreur réseau ou autre, on l'affiche en console et on alerte l'utilisateur
    console.error("Erreur Geo Gouv :", err);
    errorElement.textContent = "Impossible de récupérer les communes. Réessayez plus tard.";
    reinitialiserSelectEtMasquerBloc();
  }
});

/**
 * Événement déclenché au clic sur le bouton "Valider".
 * - Vérifie à nouveau le code postal (au cas où l'utilisateur n'aurait pas modifié le champ après erreur).
 * - Vérifie que l'utilisateur a sélectionné une commune (INSEE).
 * - Constitue un objet "optionsAffichage" en fonction des cases cochées.
 * - Récupère l'unité choisie (C ou F), puis appelle createCard() pour afficher les cartes météo.
 */
validationButton.addEventListener("click", () => {
  // Réinitialisation du message d'erreur
  errorElement.textContent = "";
  const selectedInsee = communeSelect.value;
  const codePostal = codePostalInput.value;

  // Vérification du format du code postal
  if (!estCodePostalValide(codePostal)) {
    errorElement.textContent = "Le code postal doit contenir exactement 5 chiffres.";
    reinitialiserSelectEtMasquerBloc();
    return;
  }

  // Vérifie que l'utilisateur a bien choisi une commune dans la liste
  if (!selectedInsee) {
    errorElement.textContent = "Veuillez choisir une ville dans la liste.";
    return;
  }

  // Préparation de l'objet des options d'affichage selon les cases cochées
  const optionsAffichage = {
    showLatitude:   chkLatitude.checked,
    showLongitude:  chkLongitude.checked,
    showPluie:      chkPluie.checked,
    showVentMoyen:  chkVentMoyen.checked,
    showDirVent:    chkDirVent.checked
  };

  // Récupère l'unité choisie ; si unitSelect n'existe pas, on retombe sur "C" par défaut
  const unit = unitSelect ? unitSelect.value : "C";

  // Appelle la fonction principale pour créer et afficher les cartes météo
  createCard(selectedInsee, optionsAffichage, unit);
});

/**
 * Initialise le thème (clair ou sombre) au chargement de la page.
 * - On récupère la préférence stockée dans localStorage.
 * - Si "dark", on applique l'attribut data-theme="dark" sur la racine <html>.
 * - On coche/décoche la checkbox en fonction de la préférence.
 */
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

/**
 * Bascule entre le thème clair et sombre lorsque l'utilisateur clique sur la checkbox.
 * - Si cochée, on applique le thème sombre et on enregistre "dark" dans localStorage.
 * - Sinon, on retire l'attribut data-theme et on enregistre "light".
 */
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

// Au chargement complet du DOM, on initialise le thème et on ajoute l'écouteur sur la checkbox
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const themeCheckbox = document.getElementById("themeCheckbox");
  if (themeCheckbox) {
    themeCheckbox.addEventListener("change", toggleTheme);
  }
});
