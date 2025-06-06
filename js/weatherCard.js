// Table de correspondance entre les codes météo Météo-Concept et les icônes OpenWeatherMap.
// Chaque clé représente un code météo retourné par l'API Météo-Concept.
// Pour chaque code, on définit quel fichier d'icône utiliser en plein jour (day) et la nuit (night).
const meteoConceptToOWM = {
  0:   { day: "01d.png", night: "01n.png" }, 
  1:   { day: "02d.png", night: "02n.png" }, 
  2:   { day: "03d.png", night: "03n.png" }, 
  3:   { day: "04d.png", night: "04n.png" }, 
  4:   { day: "04d.png", night: "04n.png" }, 
  5:   { day: "04d.png", night: "04n.png" }, 
  6:   { day: "50d.png", night: "50n.png" }, 
  7:   { day: "50d.png", night: "50n.png" }, 
  10:  { day: "09d.png", night: "09n.png" }, 
  11:  { day: "10d.png", night: "10n.png" }, 
  12:  { day: "10d.png", night: "10n.png" }, 
  13:  { day: "10d.png", night: "10n.png" }, 
  14:  { day: "10d.png", night: "10n.png" }, 
  15:  { day: "10d.png", night: "10n.png" }, 
  16:  { day: "09d.png", night: "09n.png" }, 
  20:  { day: "13d.png", night: "13n.png" }, 
  21:  { day: "13d.png", night: "13n.png" }, 
  22:  { day: "13d.png", night: "13n.png" }, 
  30:  { day: "13d.png", night: "13n.png" }, 
  31:  { day: "13d.png", night: "13n.png" }, 
  32:  { day: "13d.png", night: "13n.png" }, 
  40:  { day: "09d.png", night: "09n.png" }, 
  41:  { day: "09d.png", night: "09n.png" }, 
  42:  { day: "10d.png", night: "10n.png" }, 
  43:  { day: "09d.png", night: "09n.png" }, 
  44:  { day: "10d.png", night: "10n.png" }, 
  45:  { day: "10d.png", night: "10n.png" }, 
  46:  { day: "10d.png", night: "10n.png" }, 
  47:  { day: "10d.png", night: "10n.png" }, 
  48:  { day: "10d.png", night: "10n.png" }, 
  60:  { day: "13d.png", night: "13n.png" }, 
  61:  { day: "13d.png", night: "13n.png" }, 
  62:  { day: "13d.png", night: "13n.png" }, 
  63:  { day: "13d.png", night: "13n.png" }, 
  64:  { day: "13d.png", night: "13n.png" }, 
  65:  { day: "13d.png", night: "13n.png" }, 
  66:  { day: "13d.png", night: "13n.png" }, 
  67:  { day: "13d.png", night: "13n.png" }, 
  68:  { day: "13d.png", night: "13n.png" }, 
  70:  { day: "13d.png", night: "13n.png" }, 
  71:  { day: "13d.png", night: "13n.png" }, 
  72:  { day: "13d.png", night: "13n.png" }, 
  73:  { day: "13d.png", night: "13n.png" }, 
  74:  { day: "13d.png", night: "13n.png" }, 
  75:  { day: "13d.png", night: "13n.png" }, 
  76:  { day: "13d.png", night: "13n.png" }, 
  77:  { day: "13d.png", night: "13n.png" }, 
  78:  { day: "13d.png", night: "13n.png" }, 
  100: { day: "11d.png", night: "11n.png" }, 
  101: { day: "11d.png", night: "11n.png" }, 
  102: { day: "11d.png", night: "11n.png" }, 
  103: { day: "11d.png", night: "11n.png" }, 
  104: { day: "11d.png", night: "11n.png" }, 
  105: { day: "11d.png", night: "11n.png" }, 
  106: { day: "11d.png", night: "11n.png" }, 
  107: { day: "11d.png", night: "11n.png" }, 
  108: { day: "11d.png", night: "11n.png" }, 
  120: { day: "11d.png", night: "11n.png" }, 
  121: { day: "11d.png", night: "11n.png" }, 
  122: { day: "11d.png", night: "11n.png" }, 
  123: { day: "11d.png", night: "11n.png" }, 
  124: { day: "11d.png", night: "11n.png" }, 
  125: { day: "11d.png", night: "11n.png" }, 
  126: { day: "11d.png", night: "11n.png" }, 
  127: { day: "11d.png", night: "11n.png" }, 
  128: { day: "11d.png", night: "11n.png" }, 
  130: { day: "11d.png", night: "11n.png" }, 
  131: { day: "11d.png", night: "11n.png" }, 
  132: { day: "11d.png", night: "11n.png" }, 
  133: { day: "11d.png", night: "11n.png" }, 
  134: { day: "11d.png", night: "11n.png" }, 
  135: { day: "11d.png", night: "11n.png" }, 
  136: { day: "11d.png", night: "11n.png" }, 
  137: { day: "11d.png", night: "11n.png" }, 
  138: { day: "11d.png", night: "11n.png" }, 
  140: { day: "11d.png", night: "11n.png" }, 
  141: { day: "11d.png", night: "11n.png" }, 
  142: { day: "11d.png", night: "11n.png" }, 
  210: { day: "09d.png", night: "09n.png" }, 
  211: { day: "10d.png", night: "10n.png" }, 
  212: { day: "10d.png", night: "10n.png" }, 
  220: { day: "13d.png", night: "13n.png" }, 
  221: { day: "13d.png", night: "13n.png" }, 
  222: { day: "13d.png", night: "13n.png" }, 
  230: { day: "13d.png", night: "13n.png" }, 
  231: { day: "13d.png", night: "13n.png" }, 
  232: { day: "13d.png", night: "13n.png" }, 
  235: { day: "10d.png", night: "10n.png" }  
};

/**
 * Convertit une température en degrés Celsius vers Fahrenheit.
 * Formule : (°C * 9/5) + 32, puis arrondi à l'entier le plus proche.
 * @param {number} tempC - Température en degré Celsius.
 * @returns {number} - Température convertie en degré Fahrenheit.
 */
function celsiusToFahrenheit(tempC) {
  return Math.round((tempC * 9) / 5 + 32);
}

/**
 * Récupère les données météo d'un jour précis pour une commune donnée, en utilisant l'API Météo-Concept.
 * Le paramètre 'dayIndex' vaut 0 pour aujourd'hui, 1 pour demain, etc.
 * Methodologie :
 * - Construit l'URL avec le token et le code INSEE.
 * - Effectue un fetch et vérifie la réponse.
 * - Renvoie les données JSON en cas de succès.
 * @param {string} insee - Code INSEE de la commune.
 * @param {number} dayIndex - Jour de la prévision (0 = aujourd'hui).
 * @returns {Promise<object>} - Données météo brutes de l'API.
 */
async function fetchMeteoByDay(insee, dayIndex) {
  try {
    const token = "9a33a68d1fdaeff4b6839e46afefa66c6d9db6a496a903d8cab69ad1e1cc8985";
    const url = `https://api.meteo-concept.com/api/forecast/daily/${dayIndex}?token=${token}&insee=${insee}`;
    console.log("Requête API Météo-Concept :", url);
    const response = await fetch(url);

    // Si le statut HTTP n'est pas "OK", on lève une exception pour gérer l'erreur plus bas
    if (!response.ok) {
      throw new Error(`Météo-Concept : status ${response.status}`);
    }

    // Conversion de la réponse en JSON et retour de l'objet
    const data = await response.json();
    return data;
  } catch (err) {
    // Log de l'erreur dans la console pour débogage
    console.error("Erreur API Météo-Concept :", err);
    throw err;
  }
}

/**
 * Formate le nombre d'heures d'ensoleillement en français :
 * - "1 heure" si value = 1
 * - "X heures" si value > 1
 * @param {number} sunHours - Nombre d'heures d'ensoleillement.
 * @returns {string} - Chaîne formatée ("1 heure" ou "3 heures", etc.).
 */
function displayHours(sunHours) {
  return sunHours + (sunHours > 1 ? " heures" : " heure");
}

/**
 * Crée dynamiquement un curseur (input de type range) pour choisir le nombre de jours de prévision.
 * - Génère un conteneur avec un label et un span indiquant la valeur sélectionnée (ex. "3j").
 * - Ajoute un écouteur "input" pour mettre à jour le texte et appeler le callback passé en paramètre.
 * @param {HTMLElement} parentContainer - Conteneur DOM où insérer le slider.
 * @param {function} onChangeCallback - Fonction à appeler à chaque modification du slider.
 */
function createDaysSlider(parentContainer, onChangeCallback) {
  // Création du wrapper global
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("days-slider-container");

  // Label explicatif pour le curseur
  const label = document.createElement("label");
  label.setAttribute("for", "daysRange");
  label.textContent = "Prévisions sur :";
  sliderContainer.appendChild(label);

  // Span qui affichera dynamiquement la valeur (ex. "1j")
  const currentDays = document.createElement("span");
  currentDays.classList.add("current-days");
  currentDays.textContent = "1j"; // Valeur initiale
  sliderContainer.appendChild(currentDays);

  // Input de type range pour sélectionner les jours (1 à 7)
  const inputRange = document.createElement("input");
  inputRange.setAttribute("type", "range");
  inputRange.setAttribute("min", "1");
  inputRange.setAttribute("max", "7");
  inputRange.setAttribute("value", "1");
  inputRange.setAttribute("id", "daysRange");

  // Écouteur pour mettre à jour l'affichage de la valeur et appeler le callback
  inputRange.addEventListener("input", (e) => {
    const selectedValue = Number(e.target.value);
    currentDays.textContent = `${selectedValue}j`; 
    onChangeCallback(selectedValue); 
  });
  sliderContainer.appendChild(inputRange);

  // On ajoute finalement le slider au conteneur parent
  parentContainer.appendChild(sliderContainer);
}

/**
 * Affiche les cartes météo pour un nombre de jours donné.
 * Étapes clés :
 *  1. Vide le conteneur des cartes existantes.
 *  2. Lance plusieurs fetch en parallèle (une promesse par jour).
 *  3. Attend la résolution de toutes les promesses (Promise.all).
 *     - En cas d'erreur sur une requête, affiche un message d'erreur dans le conteneur.
 *  4. Pour chaque réponse, crée une carte détaillée :
 *     - Formate la date en français.
 *     - Sélectionne l'icône jour/nuit selon l'heure locale de la date.
 *     - Affiche les températures min/max (convertit en °F si nécessaire).
 *     - Ajoute les informations optionnelles (latitude, longitude, pluie en mm, vent).
 *     - Insère la carte dans le conteneur.
 * @param {HTMLElement} container - Élément DOM qui contient la classe ".cards-holder".
 * @param {string} insee - Code INSEE de la commune sélectionnée.
 * @param {number} days - Nombre de jours de prévision à afficher.
 * @param {object} options - Options d’affichage : { showLatitude, showLongitude, showPluie, showVentMoyen, showDirVent }.
 * @param {string} unit - "C" ou "F" pour l'unité de température.
 */
async function renderForecast(container, insee, days, options, unit) {
  // Sélectionne le conteneur interne où seront ajoutées les cartes météo
  const cardsHolder = container.querySelector(".cards-holder");
  cardsHolder.innerHTML = ""; // Vide tout contenu existant

  // Prépare un tableau de promesses (une par jour)
  const fetchPromises = [];
  for (let i = 0; i < days; i++) {
    fetchPromises.push(fetchMeteoByDay(insee, i));
  }

  let results;
  try {
    // Attend que toutes les requêtes soient terminées
    results = await Promise.all(fetchPromises);
  } catch (err) {
    // En cas d'erreur, affiche un message et arrête la suite
    console.error("Erreur lors du fetch de plusieurs jours :", err);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Impossible de récupérer toutes les données météo.";
    errorMsg.classList.add("error-message");
    cardsHolder.appendChild(errorMsg);
    return;
  }

  // Parcourt chaque résultat pour créer une carte météo
  results.forEach((dataMeteo) => {
    const card = document.createElement("div");
    card.classList.add("weather-card", "card");

    // Conversion de la date brute en objet Date
    const rawDatetime = dataMeteo.forecast.datetime; 
    const dateObj = new Date(rawDatetime);

    // Formatage de la date en français (ex. "5 juin 2025")
    const optionsIntl = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("fr-FR", optionsIntl);

    // Création du titre de la carte (date + nom de la ville)
    const dayTitle = document.createElement("h3");
    dayTitle.textContent = `${formattedDate} — ${dataMeteo.city.name}`;
    card.appendChild(dayTitle);
    
    // Récupère le code météo et cherche l'icône correspondante
    const codeWeather = dataMeteo.forecast.weather; 
    const icons = meteoConceptToOWM[codeWeather];
    if (icons) {
      // Détermine s’il faut afficher l’icône de nuit ou de jour
      const hour = dateObj.getHours();
      const isNight = (hour < 6 || hour >= 18);
      const iconFilename = isNight ? icons.night : icons.day;
      const img = document.createElement("img");
      
      // Définit la source de l'image et l'attribut alt
      img.setAttribute("src", `https://openweathermap.org/img/wn/${iconFilename}`);
      img.setAttribute("alt", `Météo code ${codeWeather}`);
      img.classList.add("weather-icon");
      card.appendChild(img);
    }
    
    // Récupère les températures minimales et maximales en °C par défaut
    let tmin = dataMeteo.forecast.tmin;
    let tmax = dataMeteo.forecast.tmax;
    let tempLabel = "°C";

    // Si l'utilisateur souhaite afficher en Fahrenheit, convertit les valeurs
    if (unit === "F") {
      tmin = celsiusToFahrenheit(tmin);
      tmax = celsiusToFahrenheit(tmax);
      tempLabel = "°F";
    }

    // Affiche la ligne de température
    const tempLine = document.createElement("p");
    tempLine.textContent = `Min : ${tmin}${tempLabel}  •  Max : ${tmax}${tempLabel}`;
    card.appendChild(tempLine);
    
    // Affiche la probabilité de pluie (%)
    const rainLine = document.createElement("p");
    rainLine.textContent = `Pluie : ${dataMeteo.forecast.probarain}%`;
    card.appendChild(rainLine);
    
    // Affiche la durée d'ensoleillement formatée
    const sunLine = document.createElement("p");
    sunLine.textContent = `Ensoleillement : ${displayHours(dataMeteo.forecast.sun_hours)}`;
    card.appendChild(sunLine);
    
    // Si l'option d'afficher la latitude est activée, ajoute une ligne
    if (options.showLatitude) {
      const latElt = document.createElement("p");
      latElt.textContent = `Latitude : ${dataMeteo.city.latitude.toFixed(5)}`;
      card.appendChild(latElt);
    }

    // Si l'option d'afficher la longitude est activée, ajoute une ligne
    if (options.showLongitude) {
      const lonElt = document.createElement("p");
      lonElt.textContent = `Longitude : ${dataMeteo.city.longitude.toFixed(5)}`;
      card.appendChild(lonElt);
    }

    // Si l'option d'afficher la pluie en mm est activée, ajoute une ligne
    if (options.showPluie) {
      const pluieElt = document.createElement("p");
      pluieElt.textContent = `Pluie (mm) : ${dataMeteo.forecast.rr10} mm`;
      card.appendChild(pluieElt);
    }

    // Si l'option d'afficher la vitesse moyenne du vent est activée, ajoute une ligne
    if (options.showVentMoyen) {
      const ventElt = document.createElement("p");
      ventElt.textContent = `Vent moyen : ${dataMeteo.forecast.wind10m} km/h`;
      card.appendChild(ventElt);
    }

    // Si l'option d'afficher la direction du vent est activée, ajoute une ligne
    if (options.showDirVent) {
      const dirElt = document.createElement("p");
      dirElt.textContent = `Direction du vent : ${dataMeteo.forecast.dirwind10m}°`;
      card.appendChild(dirElt);
    }

    // Ajoute finalement la carte complète au conteneur
    cardsHolder.appendChild(card);
  });
}

/**
 * Fonction principale pour créer et afficher la section météo :
 * - Cache le formulaire de sélection.
 * - Génère dynamiquement le curseur de choix des jours.
 * - Crée un conteneur pour les cartes météo.
 * - Appelle renderForecast pour afficher la première journée par défaut.
 * - Ajoute un bouton "Nouvelle recherche" pour revenir au formulaire initial.
 * @param {string} insee - Code INSEE de la commune sélectionnée.
 * @param {object} options - Options d'affichage (showLatitude, showLongitude, showPluie, showVentMoyen, showDirVent).
 * @param {string} unit - Unité choisie par l'utilisateur ("C" ou "F").
 */
function createCard(insee, options, unit) {
  // Récupère les sections du DOM : formulaire et affichage météo
  const requestSection = document.getElementById("cityForm");
  const weatherSection = document.getElementById("weatherInformation");

  // Cache la section de formulaire pour ne laisser visible que la météo
  requestSection.classList.add("hidden");
  weatherSection.innerHTML = ""; // Vide tout contenu existant

  // Création du conteneur pour le slider de jours
  const sliderContainer = document.createElement("div");
  createDaysSlider(sliderContainer, (jours) => {
    // Chaque fois que le slider change, on réaffiche les prévisions pour 'jours' jours
    renderForecast(weatherSection, insee, jours, options, unit);
  });

  // Création du conteneur pour les cartes météo
  const cardsHolder = document.createElement("div");
  cardsHolder.classList.add("cards-holder");

  // Ajout du slider et du conteneur de cartes à la section météo
  weatherSection.appendChild(sliderContainer);
  weatherSection.appendChild(cardsHolder);

  // Affiche immédiatement la prévision pour le premier jour (valeur par défaut = 1)
  renderForecast(weatherSection, insee, 1, options, unit);

  // Création du bouton pour revenir à une nouvelle recherche
  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Nouvelle recherche";
  reloadButton.classList.add("reloadButton");
  reloadButton.addEventListener("click", () => {
    // Lorsque cliqué : on réaffiche le formulaire, on cache la section météo, et on réinitialise les champs
    requestSection.classList.remove("hidden");
    weatherSection.classList.add("hidden");
    document.getElementById("code-postal").value = "";
    const communeSelect = document.getElementById("communeSelect");
    communeSelect.innerHTML = '<option disabled selected>Choisissez une ville</option>';
    document.getElementById("error").textContent = "";
    document.getElementById("villeBlock").classList.add("hidden");
    document.getElementById("optionsMeteo").classList.add("hidden");
    document.getElementById("unitBlock").classList.add("hidden");
    document.getElementById("chkLatitude").checked = false;
    document.getElementById("chkLongitude").checked = false;
    document.getElementById("chkPluie").checked = false;
    document.getElementById("chkVentMoyen").checked = false;
    document.getElementById("chkDirVent").checked = false;
  });
  weatherSection.appendChild(reloadButton);

  // Rend visible la section météo (était cachée initialement)
  weatherSection.classList.remove("hidden");
}

// Rend la fonction disponible globalement pour être appelée depuis app.js
window.createCard = createCard;
