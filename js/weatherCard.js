async function fetchMeteoByDay(insee, dayIndex) {
  try {
    const token = "9a33a68d1fdaeff4b6839e46afefa66c6d9db6a496a903d8cab69ad1e1cc8985";
    const url = `https://api.meteo-concept.com/api/forecast/daily/${dayIndex}?token=${token}&insee=${insee}`;
    console.log(url)
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

async function renderForecast(container, insee, days, options) {
  const cardsHolder = container.querySelector(".cards-holder");
  cardsHolder.innerHTML = "";

  const fetchPromises = [];
  for (let i = 0; i < days; i++) {
    fetchPromises.push(fetchMeteoByDay(insee, i));
  }
  console.log(fetchPromises)
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

  results.forEach((dataMeteo, index) => {
    const card = document.createElement("div");
    card.classList.add("weather-card", "card");

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = `Jour ${index + 1} — ${dataMeteo.city.name}`;
    card.appendChild(dayTitle);

    const tempLine = document.createElement("p");
    tempLine.textContent = `Min : ${dataMeteo.forecast.tmin}°C  •  Max : ${dataMeteo.forecast.tmax}°C`;
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

function createCard(insee, options) {
  const requestSection = document.getElementById("cityForm");
  const weatherSection = document.getElementById("weatherInformation");

  requestSection.classList.add("hidden");

  weatherSection.innerHTML = "";

  const cardsHolder = document.createElement("div");
  cardsHolder.classList.add("cards-holder");

  createDaysSlider(weatherSection, (selectedDays) => {
    renderForecast(weatherSection, insee, selectedDays, options);
  });

  weatherSection.appendChild(cardsHolder);

  renderForecast(weatherSection, insee, 1, options);

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
    document.getElementById("chkLatitude").checked    = false;
    document.getElementById("chkLongitude").checked   = false;
    document.getElementById("chkPluie").checked       = false;
    document.getElementById("chkVentMoyen").checked   = false;
    document.getElementById("chkDirVent").checked     = false;
  });
  weatherSection.appendChild(reloadButton);

  weatherSection.classList.remove("hidden");
}

window.createCard = createCard;
