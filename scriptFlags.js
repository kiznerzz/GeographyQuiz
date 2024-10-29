const flagContainer = document.getElementById("flag-container");
const flagImage = document.getElementById("flag-image");
const countryGuess = document.getElementById("country-guess");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const stopwatch = document.getElementById("stopwatch");
const progressCounter = document.getElementById("progress-counter");
const skipButton = document.getElementById("skip-button");
const winModal = document.getElementById("win-modal");
const winTime = document.getElementById("win-time");
const winScore = document.getElementById("win-score");
const winDate = document.getElementById("win-date");
const loseModal = document.getElementById("lose-modal");
const loseTime = document.getElementById("lose-time");
const loseScore = document.getElementById("lose-score");
const loseDate = document.getElementById("lose-date");
const giveUpButton = document.getElementById("give-up-button");
const restartWinButton = document.getElementById("restart-win-button");
const restartLoseButton = document.getElementById("restart-lose-button");

// Dictionary to link filenames with country names
const flagData = {
  "abkhazia.png": "Abkhazia",
  "afghanistan.png": "Afghanistan",
  "aland_islands.png": "Aland Islands",
  "alaska.png": "Alaska",
  "albania.png": "Albania",
  "alderney.png": "Alderney",
  "algeria.png": "Algeria",
  "american_samoa.png": "American Samoa",
  "andorra.png": "Andorra",
  "angola.png": "Angola",
  "anguilla.png": "Anguilla",
  "antarctica.png": "Antarctica",
  "antigua_and_barbuda.png": "Antigua and Barbuda",
  "argentina.png": "Argentina",
  "armenia.png": "Armenia",
  "artsakh.png": "Artsakh",
  "aruba.png": "Aruba",
  "ascension_island.png": "Ascension Island",
  "australia.png": "Australia",
  "austria.png": "Austria",
  "azerbaijan.png": "Azerbaijan",
  "azores.png": "Azores",
  "bahamas.png": "Bahamas",
  "bahrain.png": "Bahrain",
  "bali.png": "Bali",
  "bangladesh.png": "Bangladesh",
  "barbados.png": "Barbados",
  "barotseland.png": "Barotseland",
  "basque_country.png": "Basque Country",
  "belarus.png": "Belarus",
  "belgium.png": "Belgium",
  "belize.png": "Belize",
  "benin.png": "Benin",
  "bermuda.png": "Bermuda",
  "bhutan.png": "Bhutan",
  "bolivia.png": "Bolivia",
  "bonaire.png": "Bonaire",
  "bosnia_and_herzegovina.png": "Bosnia and Herzegovina",
  "botswana.png": "Botswana",
  "bougainville.png": "Bougainville",
  "brazil.png": "Brazil",
  "british_antarctic_territory.png": "British Antarctic Territory",
  "british_indian_ocean_territory.png": "British Indian Ocean Territory",
  "british_virgin_islands.png": "British Virgin Islands",
  "brunei.png": "Brunei",
  "bulgaria.png": "Bulgaria",
  "burkina_faso.png": "Burkina Faso",
  "burundi.png": "Burundi",
  "cambodia.png": "Cambodia",
  "cameroon.png": "Cameroon",
  "canada.png": "Canada",
  "canary_islands.png": "Canary Islands",
  "cape_verde.png": "Cape Verde",
  "catalonia.png": "Catalonia",
  "cayman_islands.png": "Cayman Islands",
  "central_african_republic.png": "Central African Republic|CAR",
  "ceuta.png": "Ceuta",
  "chad.png": "Chad",
  "chatham_islands.png": "Chatham Islands",
  "chechnya.png": "Chechnya",
  "chile.png": "Chile",
  "china.png": "China",
  "christmas_island.png": "Christmas Island",
  "clipperton_island.png": "Clipperton Island",
  "cocos_islands.png": "Cocos Islands|Keeling Islands",
  "colombia.png": "Colombia",
  "comoros.png": "Comoros",
  "congo.png": "Congo|Republic of the Congo|Republic of Congo",
  "cook_islands.png": "Cook Islands",
  "corsica.png": "Corsica",
  "costa_rica.png": "Costa Rica",
  "crimea.png": "Crimea",
  "croatia.png": "Croatia",
  "cuba.png": "Cuba",
  "curacao.png": "Curacao",
  "cyprus.png": "Cyprus",
  "czech_republic.png": "Czech Republic|Czechia",
  "democratic_republic_of_congo.png":
    "Democratic Republic of Congo|The Democratic Republic of the Congo|DRC|Democratic Republic of Congo",
  "denmark.png": "Denmark",
  "district_of_columbia.png": "District of Columbia|DC",
  "djibouti.png": "Djibouti",
  "dominica.png": "Dominica",
  "dominican_republic.png": "Dominican Republic",
  "east_timor.png": "East Timor|Timor-Leste",
  "easter_island.png": "Easter Island",
  "ecuador.png": "Ecuador",
  "egypt.png": "Egypt",
  "el_hierro.png": "El Hierro",
  "el_salvador.png": "El Salvador",
  "england.png": "England",
  "equatorial_guinea.png": "Equatorial Guinea",
  "eritrea.png": "Eritrea",
  "estonia.png": "Estonia",
  "eswatini.png": "Eswatini|Swaziland",
  "ethiopia.png": "Ethiopia",
  "falkland_islands.png": "Falkland Islands",
  "faroe_islands.png": "Faroe Islands",
  "federated_states_of_micronesia.png":
    "Federated States of Micronesia|Micronesia",
  "fiji.png": "Fiji",
  "finland.png": "Finland",
  "flemish_region.png": "Flemish Region|Flanders",
  "formentera.png": "Formentera",
  "france.png": "France",
  "french_guiana.png": "French Guiana",
  "french_polynesia.png": "French Polynesia",
  "french_southern_and_antarctic_lands.png":
    "French Southern and Antarctic Lands",
  "fuerteventura.png": "Fuerteventura",
  "gabon.png": "Gabon",
  "galapagos_islands.png": "Galapagos Islands",
  "gambia.png": "Gambia",
  "georgia.png": "Georgia",
  "germany.png": "Germany",
  "ghana.png": "Ghana",
  "gibraltar.png": "Gibraltar",
  "gran_canaria.png": "Gran Canaria",
  "greece.png": "Greece",
  "greenland.png": "Greenland",
  "grenada.png": "Grenada",
  "guadeloupe.png": "Guadeloupe",
  "guam.png": "Guam",
  "guatemala.png": "Guatemala",
  "guernsey.png": "Guernsey",
  "guinea.png": "Guinea",
  "guinea_bissau.png": "Guinea-Bissau|Guinea Bissau",
  "guyana.png": "Guyana",
  "haiti.png": "Haiti",
  "hawaii.png": "Hawaii",
  "heard_island_and_mcdonald_islands.png": "Heard Island and McDonald Islands",
  "herm.png": "Herm",
  "honduras.png": "Honduras",
  "hong_kong.png": "Hong Kong",
  "hungary.png": "Hungary",
  "ibiza.png": "Ibiza",
  "iceland.png": "Iceland",
  "india.png": "India",
  "indonesia.png": "Indonesia",
  "iran.png": "Iran",
  "iraq.png": "Iraq",
  "ireland.png": "Ireland",
  "isle_of_man.png": "Isle of Man",
  "israel.png": "Israel",
  "italy.png": "Italy",
  "ivory_coast.png": "Ivory Coast|Cote d'Ivoire",
  "jamaica.png": "Jamaica",
  "japan.png": "Japan",
  "jarvis_island.png": "Jarvis Island",
  "jersey.png": "Jersey",
  "johnston_atoll.png": "Johnston Atoll",
  "jordan.png": "Jordan",
  "juan_fernandez_islands.png": "Juan Fernandez Islands",
  "kaliningrad.png": "Kaliningrad",
  "kazakhstan.png": "Kazakhstan",
  "kenya.png": "Kenya",
  "kingman_reef.png": "Kingman Reef",
  "kiribati.png": "Kiribati",
  "kosovo.png": "Kosovo",
  "kurdistan.png": "Kurdistan",
  "kuwait.png": "Kuwait",
  "kyrgyzstan.png": "Kyrgyzstan",
  "la_gomera.png": "La Gomera",
  "la_palma.png": "La Palma",
  "lanzarote.png": "Lanzarote",
  "laos.png": "Laos",
  "latvia.png": "Latvia",
  "lebanon.png": "Lebanon",
  "lesotho.png": "Lesotho",
  "liberia.png": "Liberia",
  "libya.png": "Libya",
  "liechtenstein.png": "Liechtenstein",
  "lithuania.png": "Lithuania",
  "lord_howe_island.png": "Lord Howe Island",
  "luxembourg.png": "Luxembourg",
  "macau.png": "Macau",
  "madagascar.png": "Madagascar",
  "madeira.png": "Madeira",
  "malawi.png": "Malawi",
  "malaysia.png": "Malaysia",
  "maldives.png": "Maldives",
  "mali.png": "Mali",
  "mallorca.png": "Mallorca",
  "malta.png": "Malta",
  "marshall_islands.png": "Marshall Islands",
  "martinique.png": "Martinique",
  "mauritania.png": "Mauritania",
  "mauritius.png": "Mauritius",
  "mayotte.png": "Mayotte",
  "melilla.png": "Melilla",
  "menorca.png": "Menorca",
  "mexico.png": "Mexico",
  "midway_atoll.png": "Midway Atoll",
  "moldova.png": "Moldova",
  "monaco.png": "Monaco",
  "mongolia.png": "Mongolia",
  "montenegro.png": "Montenegro",
  "montserrat.png": "Montserrat",
  "morocco.png": "Morocco",
  "mozambique.png": "Mozambique",
  "myanmar.png": "Myanmar",
  "namibia.png": "Namibia",
  "nauru.png": "Nauru",
  "navassa_island.png": "Navassa Island",
  "nepal.png": "Nepal",
  "netherlands.png": "Netherlands",
  "new_caledonia.png": "New Caledonia",
  "new_zealand.png": "New Zealand",
  "nicaragua.png": "Nicaragua",
  "niger.png": "Niger",
  "nigeria.png": "Nigeria",
  "niue.png": "Niue",
  "norfolk_island.png": "Norfolk Island",
  "north_korea.png": "North Korea",
  "north_macedonia.png": "North Macedonia",
  "northern_cyprus.png": "Northern Cyprus",
  "northern_ireland.png": "Northern Ireland",
  "northern_mariana_islands.png": "Northern Mariana Islands",
  "norway.png": "Norway",
  "oman.png": "Oman",
  "orkney.png": "Orkney",
  "pakistan.png": "Pakistan",
  "palau.png": "Palau",
  "palestine.png": "palestine",
  "palmyra_atoll.png": "Palmyra Atoll",
  "panama.png": "Panama",
  "papua_new_guinea.png": "Papua New Guinea",
  "paraguay.png": "Paraguay",
  "peru.png": "Peru",
  "philippines.png": "Philippines",
  "pitcairn_islands.png": "Pitcairn Islands",
  "poland.png": "Poland",
  "portugal.png": "Portugal",
  "prince_edward_island.png": "Prince Edward Island",
  "puerto_rico.png": "Puerto Rico",
  "qatar.png": "Qatar",
  "quebec.png": "Quebec",
  "reunion.png": "Reunion",
  "romania.png": "Romania",
  "russia.png": "Russia",
  "rwanda.png": "Rwanda",
  "saba.png": "Saba",
  "saint_barthelemy.png": "Saint Barthelemy|St Barthelemy|St. Barthelemy",
  "saint_helena.png": "Saint Helena|St Helena|St. Helena",
  "saint_kitts_and_nevis.png":
    "Saint Kitts and Nevis|St Kitts and Nevis|St. Kitts and Nevis",
  "saint_lucia.png": "Saint Lucia|St Lucia|St. Lucia",
  "saint_pierre_and_miquelon.png":
    "Saint Pierre and Miquelon|St Pierre and Miquelon|St. Pierre and Miquelon",
  "saint_vincent_and_the_grenadines.png":
    "Saint Vincent and the Grenadines|St Vincent and the Grenadines|St. Vincent and the Grenadines",
  "samoa.png": "Samoa",
  "san_marino.png": "San Marino",
  "sao_tome_and_principe.png": "Sao Tome and Principe",
  "sapmi.png": "Sapmi",
  "sardinia.png": "Sardinia",
  "sark.png": "Sark",
  "saudi_arabia.png": "Saudi Arabia",
  "scania.png": "Scania",
  "scotland.png": "Scotland",
  "senegal.png": "Senegal",
  "serbia.png": "Serbia",
  "seychelles.png": "Seychelles",
  "shetland_islands.png": "Shetland Islands",
  "sicily.png": "Sicily",
  "sierra_leone.png": "Sierra Leone",
  "singapore.png": "Singapore",
  "sint_eustatius.png": "Sint Eustatius",
  "sint_maarten.png": "Sint Maarten",
  "slovakia.png": "Slovakia",
  "slovenia.png": "Slovenia",
  "solomon_islands.png": "Solomon Islands",
  "somalia.png": "Somalia",
  "south_africa.png": "South Africa",
  "south_georgia_and_the_south_sandwich_islands.png":
    "South Georgia and the South Sandwich Islands",
  "south_korea.png": "South Korea",
  "south_ossetia.png": "South Ossetia",
  "south_sudan.png": "South Sudan",
  "spain.png": "Spain",
  "sri_lanka.png": "Sri Lanka",
  "sudan.png": "Sudan",
  "suriname.png": "Suriname",
  "sweden.png": "Sweden",
  "switzerland.png": "Switzerland",
  "syria.png": "Syria",
  "taiwan.png": "Taiwan",
  "tajikistan.png": "Tajikistan",
  "tanzania.png": "Tanzania",
  "tasmania.png": "Tasmania",
  "tenerife.png": "Tenerife",
  "thailand.png": "Thailand",
  "tibet.png": "Tibet",
  "togo.png": "Togo",
  "tokelau.png": "Tokelau",
  "tonga.png": "Tonga",
  "transnistria.png": "Transnistria",
  "trinidad_and_tobago.png": "Trinidad and Tobago",
  "tristan_da_cunha.png": "Tristan da Cunha",
  "tunisia.png": "Tunisia",
  "turkey.png": "Turkey|Turkiye",
  "turkmenistan.png": "Turkmenistan",
  "turks_and_caicos_islands.png": "Turks and Caicos Islands",
  "tuvalu.png": "Tuvalu",
  "uganda.png": "Uganda",
  "ukraine.png": "Ukraine",
  "united_arab_emirates.png": "United Arab Emirates|UAE",
  "united_kingdom.png": "United Kingdom|UK|Britain|Great Britain|GB",
  "united_states.png": "United States|US|USA",
  "uruguay.png": "Uruguay",
  "us_virgin_islands.png": "US Virgin Islands",
  "uzbekistan.png": "Uzbekistan",
  "vanuatu.png": "Vanuatu",
  "vatican_city.png": "Vatican City|Vatican|Holy See",
  "venezuela.png": "Venezuela",
  "vietnam.png": "Vietnam",
  "wake_island.png": "Wake Island",
  "wales.png": "Wales",
  "wallis_and_futuna.png": "Wallis and Futuna",
  "wallonia.png": "Wallonia",
  "west_papua.png": "West Papua",
  "western_sahara.png": "Western Sahara",
  "yemen.png": "Yemen",
  "zambia.png": "Zambia",
  "zimbabwe.png": "Zimbabwe",
};

let flags = Object.keys(flagData); // Array of filenames (keys from the dictionary)
let totalFlags = flags.length;
let currentFlagIndex = 0;
let totalSeconds = 0; // Total seconds for the stopwatch
let correctGuesses = 0;
let incorrectGuesses = 0;
let precision = 0; // Start precision at 0%

let stopwatchInterval; // Variable to hold the interval ID for the stopwatch

// Function to pick a random flag
function pickRandomFlag() {
  const randomIndex = Math.floor(Math.random() * flags.length);
  return flags[randomIndex];
}

// Function to display the flag
function displayFlag(flagFilename) {
  const countryName = flagData[flagFilename]; // Get country name from dictionary
  flagImage.src = `Flags/${flagFilename}`; // Replace with your folder path

  // Remove the shadow if Nepal is the selected flag
  if (countryName === "Nepal") {
    flagImage.classList.add("no-shadow");
  } else {
    flagImage.classList.remove("no-shadow");
  }
}

// Function to pad single-digit numbers with leading zeros
function pad(val) {
  return val > 9 ? val : "0" + val;
}

// Function to start the stopwatch
function startStopwatch() {
  // Use setInterval and assign the interval ID to a variable
  stopwatchInterval = setInterval(function () {
    ++totalSeconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    const seconds = totalSeconds % 60;
    stopwatch.textContent =
      (hours > 0 ? pad(hours) + ":" : "") + pad(minutes) + ":" + pad(seconds);
  }, 1000);
}

// Function to update progress counter
function updateProgressCounter() {
  progressCounter.textContent = `${currentFlagIndex}/${totalFlags} | ${precision}%`;
}

// Function to handle guess submission
function handleGuess() {
  const guess = countryGuess.value.trim().toLowerCase(); // Trim and convert to lowercase
  if (guess === "") {
    // Check if the input field is empty
    return; // Exit the function if the input field is empty
  }

  const flagFilename = flagImage.src.split("/").pop(); // Extract filename from src
  const correctCountry = flagData[flagFilename]; // Get correct country name

  if (correctCountry.includes("|")) {
    const correctCountries = correctCountry.split("|").map((c) => c.trim());
    if (correctCountries.some((c) => c.toLowerCase() === guess)) {
      message.textContent = "\n";
      flags = flags.filter((f) => f !== flagFilename); // Remove guessed flag
      currentFlagIndex++;
      correctGuesses++;
      precision = Math.round(
        (correctGuesses / (correctGuesses + incorrectGuesses)) * 100
      );
      if (currentFlagIndex === totalFlags) {
        submitButton.disabled = true;
        flags.length = 0; // Empty the flags array
        progressCounter.textContent = `${totalFlags}/${totalFlags} | ${precision}%`;
        handleWin();
      } else {
        displayFlag(pickRandomFlag());
        countryGuess.value = "";
        updateProgressCounter();
      }
      document.getElementById("audio-correct").play(); // Play correct audio
      // Remove input error class if present
      countryGuess.classList.remove("input-error");
    } else {
      incorrectGuesses++;
      precision = Math.round(
        (correctGuesses / (correctGuesses + incorrectGuesses)) * 100
      );
      updateProgressCounter();
      document.getElementById("audio-incorrect").play(); // Play incorrect audio
      // Add input error class to highlight incorrect guess
      countryGuess.classList.add("input-error");
    }
  } else {
    if (guess === correctCountry.toLowerCase()) {
      message.textContent = "\n";
      flags = flags.filter((f) => f !== flagFilename); // Remove guessed flag
      currentFlagIndex++;
      correctGuesses++;
      precision = Math.round(
        (correctGuesses / (correctGuesses + incorrectGuesses)) * 100
      );
      if (currentFlagIndex === totalFlags) {
        submitButton.disabled = true;
        flags.length = 0; // Empty the flags array
        progressCounter.textContent = `${totalFlags}/${totalFlags} | ${precision}%`;
        handleWin();
      } else {
        displayFlag(pickRandomFlag());
        countryGuess.value = "";
        updateProgressCounter();
      }
      document.getElementById("audio-correct").play(); // Play correct audio
      // Remove input error class if present
      countryGuess.classList.remove("input-error");
    } else {
      incorrectGuesses++;
      precision = Math.round(
        (correctGuesses / (correctGuesses + incorrectGuesses)) * 100
      );
      updateProgressCounter();
      document.getElementById("audio-incorrect").play(); // Play incorrect audio
      // Add input error class to highlight incorrect guess
      countryGuess.classList.add("input-error");
    }
  }
}

let previousFlag = null; // Track the previously skipped flag

// Function to handle skipping the flag
function handleSkip() {
  if (currentFlagIndex < totalFlags - 1) {
    // Check if this is not the last flag
    let newFlag = pickRandomFlag();
    while (newFlag === previousFlag) {
      newFlag = pickRandomFlag(); // Ensure a different flag is picked
    }
    displayFlag(newFlag);
    countryGuess.value = "";
    previousFlag = newFlag;
    updateProgressCounter(); // Update progress counter
  } else {
    skipButton.disabled = true; // Disable skip button if it's the last flag
  }
}

// Function to handle win condition
function handleWin() {
  if (flags.length === 0) {
    console.log("You win!"); // Debugging log
    displayWinModal(totalSeconds); // Pass totalSeconds to getFormattedTime
    document.getElementById("audio-win").play(); // Play win audio
    displayWinModal(totalSeconds);
  }
}

// Function to format time in hh:mm:ss format
function getFormattedTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;
  return `${hours > 0 ? pad(hours) + ":" : ""}${pad(minutes)}:${pad(seconds)}`;
}

// Function to get current date and time
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  return now.toLocaleString("en-US", options);
}

// Function to display win modal
function displayWinModal(totalSeconds) {
  clearInterval(stopwatchInterval); // Clear the stopwatch interval
  const formattedTime = getFormattedTime(totalSeconds);
  winTime.textContent = formattedTime;
  winScore.textContent = precision;
  winDate.textContent = getCurrentDateTime();
  winModal.classList.add("fade"); // Add fade class to trigger animation
  winModal.style.display = "block";
  centerModal(winModal); // Center the win modal
  giveUpButton.disabled = true; // Disable the give up button

  // Delay centering after modal is rendered
  setTimeout(() => {
    centerModal(winModal); // Center the modal after it's displayed
  }, 40); // Delay of 50ms should be enough
}

// Function to display lose modal
function displayLoseModal() {
  clearInterval(stopwatchInterval); // Clear the stopwatch interval
  const formattedTime = getFormattedTime(totalSeconds);
  const now = getCurrentDateTime();

  loseTime.textContent = formattedTime;
  loseScore.textContent = `${currentFlagIndex}/${totalFlags}`;
  loseDate.textContent = now;

  loseModal.classList.add("fade"); // Add fade class to trigger animation
  loseModal.style.display = "block";

  // Delay centering after modal is rendered
  setTimeout(() => {
    centerModal(loseModal); // Center the modal after it's displayed
  }, 40); // Delay of 50ms should be enough
}

// Function to center the modal
function centerModal(modal) {
  const modalWidth = modal.offsetWidth;
  const modalHeight = modal.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const left = (windowWidth - modalWidth) / 2;
  const top = (windowHeight - modalHeight) / 2;

  modal.style.left = `${left}px`;
  modal.style.top = `${top}px`;
}

// Function to handle give up button click
function handleGiveUp() {
  clearInterval(stopwatchInterval);
  document.getElementById("audio-give_up").play(); // Play give up audio
  displayLoseModal();
  centerModal(loseModal); // Center the lose modal
}

// Function to restart the game
function restartGame() {
  giveUpButton.disabled = false;
  countryGuess.value = "";
  winModal.style.display = "none";
  loseModal.style.display = "none";
  flags = Object.keys(flagData);
  currentFlagIndex = 0;
  totalSeconds = 0;
  correctGuesses = 0;
  incorrectGuesses = 0;
  currentFlagIndex = 0;
  precision = 0; // Reset precision to 0%
  updateProgressCounter();
  displayFlag(pickRandomFlag());
  submitButton.disabled = false;
  skipButton.disabled = false;
  startStopwatch();
}

// Call displayFlag to initialize
displayFlag(pickRandomFlag());
updateProgressCounter();

// Add event listener to submit button
submitButton.addEventListener("click", handleGuess);

// Add event listener to document body to handle focus
document.body.addEventListener("click", function (event) {
  if (!countryGuess.contains(event.target)) {
    countryGuess.focus(); // Set focus back to the input box when clicking off it
  }
});

// Add event listener to input box to listen for Enter key press
countryGuess.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    // Enter key
    event.preventDefault(); // Prevent default form submission behavior
    handleGuess(); // Call handleGuess function to submit the guess
  }
});
// Add event listener to skip button
skipButton.addEventListener("click", handleSkip);
// Call handleWin on every guess
countryGuess.addEventListener("input", handleWin);
// Add event listener to give up button
giveUpButton.addEventListener("click", handleGiveUp);
// Add event listeners to restart buttons
restartWinButton.addEventListener("click", restartGame);
restartLoseButton.addEventListener("click", restartGame);

// Start the stopwatch
startStopwatch();
