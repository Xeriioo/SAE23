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

function celsiusToFahrenheit(tempC) {
  return Math.round((tempC * 9) / 5 + 32);
}

async function fetchMeteoByDay(insee, dayIndex) {
  try {
    const token = "9a33a68d1fdaeff4b6839e46afefa66c6d9db6a496a903d8cab69ad1e1cc8985";
    const url = `https://api.meteo-concept.com/api/forecast/daily/${dayIndex}?token=${token}&insee=${insee}`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Météo-Concept : status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Erreur API Météo-Concept :", err);
    throw err;
  }
}

function displayHours(sunHours) {
  return sunHours + (sunHours > 1 ? " heures" : " heure");
}

function createDaysSlider(parentContainer, onChangeCallback) {
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("days-slider-container");

  const label = document.createElement("label");
  label.setAttribute("for", "daysRange");
  label.textContent = "Prévisions sur :";
  sliderContainer.appendChild(label);

  const currentDays = document.createElement("span");
  currentDays.classList.add("current-days");
  currentDays.textContent = "1j";
  sliderContainer.appendChild(currentDays);

  const inputRange = document.createElement("input");
  inputRange.setAttribute("type", "range");
  inputRange.setAttribute("min", "1");
  inputRange.setAttribute("max", "7");
  inputRange.setAttribute("value", "1");
  inputRange.setAttribute("id", "daysRange");

  inputRange.addEventListener("input", (e) => {
    const selectedValue = Number(e.target.value);
    currentDays.textContent = `${selectedValue}j`;
    onChangeCallback(selectedValue);
  });
  sliderContainer.appendChild(inputRange);

  parentContainer.appendChild(sliderContainer);
}

async function renderForecast(container, insee, days, options, unit) {
  const cardsHolder = container.querySelector(".cards-holder");
  cardsHolder.innerHTML = "";

  const fetchPromises = [];
  for (let i = 0; i < days; i++) {
    fetchPromises.push(fetchMeteoByDay(insee, i));
  }

  let results;
  try {
    results = await Promise.all(fetchPromises);
  } catch (err) {
    console.error("Erreur lors du fetch de plusieurs jours :", err);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Impossible de récupérer toutes les données météo.";
    errorMsg.classList.add("error-message");
    cardsHolder.appendChild(errorMsg);
    return;
  }

  results.forEach((dataMeteo) => {
    const card = document.createElement("div");
    card.classList.add("weather-card", "card");

    const rawDatetime = dataMeteo.forecast.datetime; 
    const dateObj = new Date(rawDatetime);
    const optionsIntl = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("fr-FR", optionsIntl);

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = `${formattedDate} — ${dataMeteo.city.name}`;
    card.appendChild(dayTitle);
    
    const codeWeather = dataMeteo.forecast.weather; 
    const icons = meteoConceptToOWM[codeWeather];
    if (icons) {
      
      const hour = dateObj.getHours();
      const isNight = (hour < 6 || hour >= 18);
      const iconFilename = isNight ? icons.night : icons.day;
      const img = document.createElement("img");
      
      img.setAttribute("src", `https://openweathermap.org/img/wn/${iconFilename}`);
      img.setAttribute("alt", `Météo code ${codeWeather}`);
      img.classList.add("weather-icon");
      card.appendChild(img);
    }
    
    let tmin = dataMeteo.forecast.tmin;
    let tmax = dataMeteo.forecast.tmax;
    let tempLabel = "°C";

    if (unit === "F") {
      tmin = celsiusToFahrenheit(tmin);
      tmax = celsiusToFahrenheit(tmax);
      tempLabel = "°F";
    }

    const tempLine = document.createElement("p");
    tempLine.textContent = `Min : ${tmin}${tempLabel}  •  Max : ${tmax}${tempLabel}`;
    card.appendChild(tempLine);
    
    const rainLine = document.createElement("p");
    rainLine.textContent = `Pluie : ${dataMeteo.forecast.probarain}%`;
    card.appendChild(rainLine);
    
    const sunLine = document.createElement("p");
    sunLine.textContent = `Ensoleillement : ${displayHours(dataMeteo.forecast.sun_hours)}`;
    card.appendChild(sunLine);
    
    if (options.showLatitude) {
      const latElt = document.createElement("p");
      latElt.textContent = `Latitude : ${dataMeteo.city.latitude.toFixed(5)}`;
      card.appendChild(latElt);
    }

    if (options.showLongitude) {
      const lonElt = document.createElement("p");
      lonElt.textContent = `Longitude : ${dataMeteo.city.longitude.toFixed(5)}`;
      card.appendChild(lonElt);
    }

    if (options.showPluie) {
      const pluieElt = document.createElement("p");
      pluieElt.textContent = `Pluie (mm) : ${dataMeteo.forecast.rr10} mm`;
      card.appendChild(pluieElt);
    }

    if (options.showVentMoyen) {
      const ventElt = document.createElement("p");
      ventElt.textContent = `Vent moyen : ${dataMeteo.forecast.wind10m} km/h`;
      card.appendChild(ventElt);
    }

    if (options.showDirVent) {
      const dirElt = document.createElement("p");
      dirElt.textContent = `Direction du vent : ${dataMeteo.forecast.dirwind10m}°`;
      card.appendChild(dirElt);
    }

    cardsHolder.appendChild(card);
  });
}

function createCard(insee, options, unit) {
  const requestSection = document.getElementById("cityForm");
  const weatherSection = document.getElementById("weatherInformation");

  requestSection.classList.add("hidden");
  weatherSection.innerHTML = "";
  
  const sliderContainer = document.createElement("div");
  createDaysSlider(sliderContainer, (jours) => {
    renderForecast(weatherSection, insee, jours, options, unit);
  });

  const cardsHolder = document.createElement("div");
  cardsHolder.classList.add("cards-holder");

  weatherSection.appendChild(sliderContainer);
  weatherSection.appendChild(cardsHolder);

  
  renderForecast(weatherSection, insee, 1, options, unit);

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Nouvelle recherche";
  reloadButton.classList.add("reloadButton");
  reloadButton.addEventListener("click", () => {
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

  weatherSection.classList.remove("hidden");
}

window.createCard = createCard;
