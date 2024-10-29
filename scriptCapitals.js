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

// Dictionary to link filenames with country names and capitals
const countryData = {
  "afghanistan.png": ["Afghanistan", "Kabul"],
  "albania.png": ["Albania", "Tirana"],
  "algeria.png": ["Algeria", "Algiers"],
  "andorra.png": ["Andorra", "Andorra la Vella"],
  "angola.png": ["Angola", "Luanda"],
  "antigua_and_barbuda.png": [
    "Antigua and Barbuda",
    "Saint John's|St. John's|St Johns",
  ],
  "argentina.png": ["Argentina", "Buenos Aires"],
  "armenia.png": ["Armenia", "Yerevan"],
  "australia.png": ["Australia", "Canberra"],
  "austria.png": ["Austria", "Vienna"],
  "azerbaijan.png": ["Azerbaijan", "Baku"],
  "bahamas.png": ["Bahamas", "Nassau"],
  "bahrain.png": ["Bahrain", "Manama"],
  "bangladesh.png": ["Bangladesh", "Dhaka"],
  "barbados.png": ["Barbados", "Bridgetown"],
  "belarus.png": ["Belarus", "Minsk"],
  "belgium.png": ["Belgium", "Brussels"],
  "belize.png": ["Belize", "Belmopan"],
  "benin.png": ["Benin", "Porto-Novo|Porto Novo"],
  "bhutan.png": ["Bhutan", "Thimphu"],
  "bolivia.png": ["Bolivia", "Sucre|La Paz"],
  "bosnia_and_herzegovina.png": ["Bosnia and Herzegovina", "Sarajevo"],
  "botswana.png": ["Botswana", "Gaborone"],
  "brazil.png": ["Brazil", "Brasilia"],
  "brunei.png": ["Brunei", "Bandar Seri Begawan"],
  "bulgaria.png": ["Bulgaria", "Sofia"],
  "burkina_faso.png": ["Burkina Faso", "Ouagadougou"],
  "burundi.png": ["Burundi", "Bujumbura|Gitega"],
  "cape_verde.png": ["Cape Verde", "Praia"],
  "cambodia.png": ["Cambodia", "Phnom Penh"],
  "cameroon.png": ["Cameroon", "Yaounde"],
  "canada.png": ["Canada", "Ottawa"],
  "central_african_republic.png": ["Central African Republic", "Bangui"],
  "chad.png": ["Chad", "N'Djamena|Ndjamena"],
  "chile.png": ["Chile", "Santiago de Chile|Santiago"],
  "china.png": ["China", "Beijing"],
  "colombia.png": ["Colombia", "Bogota"],
  "comoros.png": ["Comoros", "Moroni"],
  "congo.png": ["Congo", "Brazzaville"],
  "costa_rica.png": ["Costa Rica", "San Jose"],
  "croatia.png": ["Croatia", "Zagreb"],
  "cuba.png": ["Cuba", "Havana"],
  "cyprus.png": ["Cyprus", "Nicosia"],
  "czech_republic.png": ["Czech Republic", "Prague"],
  "democratic_republic_of_congo.png": [
    "Democratic Republic of the Congo",
    "Kinshasa",
  ],
  "denmark.png": ["Denmark", "Copenhagen"],
  "djibouti.png": ["Djibouti", "Djibouti"],
  "dominica.png": ["Dominica", "Roseau"],
  "dominican_republic.png": ["Dominican Republic", "Santo Domingo"],
  "east_timor.png": ["East Timor", "Dili"],
  "ecuador.png": ["Ecuador", "Quito"],
  "egypt.png": ["Egypt", "Cairo"],
  "el_salvador.png": ["El Salvador", "San Salvador"],
  "equatorial_guinea.png": ["Equatorial Guinea", "Malabo"],
  "eritrea.png": ["Eritrea", "Asmara"],
  "estonia.png": ["Estonia", "Tallinn"],
  "eswatini.png": ["Eswatini", "Mbabane"],
  "ethiopia.png": ["Ethiopia", "Addis Ababa"],
  "fiji.png": ["Fiji", "Suva"],
  "finland.png": ["Finland", "Helsinki"],
  "france.png": ["France", "Paris"],
  "gabon.png": ["Gabon", "Libreville"],
  "gambia.png": ["Gambia", "Banjul"],
  "georgia.png": ["Georgia", "Tbilisi"],
  "germany.png": ["Germany", "Berlin"],
  "ghana.png": ["Ghana", "Accra"],
  "greece.png": ["Greece", "Athens"],
  "grenada.png": ["Grenada", "Saint George's|St. George's|St Georges"],
  "guatemala.png": ["Guatemala", "Guatemala City|Guatemala"],
  "guinea.png": ["Guinea", "Conakry"],
  "guinea_bissau.png": ["Guinea-Bissau", "Bissau"],
  "guyana.png": ["Guyana", "Georgetown"],
  "haiti.png": ["Haiti", "Port-au-Prince|Port au Prince"],
  "honduras.png": ["Honduras", "Tegucigalpa"],
  "hungary.png": ["Hungary", "Budapest"],
  "iceland.png": ["Iceland", "Reykjavik"],
  "india.png": ["India", "New Delhi"],
  "indonesia.png": ["Indonesia", "Jakarta"],
  "iran.png": ["Iran", "Tehran"],
  "iraq.png": ["Iraq", "Baghdad"],
  "ireland.png": ["Ireland", "Dublin"],
  "israel.png": ["Israel", "Jerusalem"],
  "italy.png": ["Italy", "Rome"],
  "ivory_coast.png": ["Ivory Coast", "Yamoussoukro"],
  "jamaica.png": ["Jamaica", "Kingston"],
  "japan.png": ["Japan", "Tokyo"],
  "jordan.png": ["Jordan", "Amman"],
  "kazakhstan.png": ["Kazakhstan", "Astana"],
  "kenya.png": ["Kenya", "Nairobi"],
  "kiribati.png": ["Kiribati", "Tarawa"],
  "kosovo.png": ["Kosovo", "Pristina"],
  "kuwait.png": ["Kuwait", "Kuwait City|Kuwait"],
  "kyrgyzstan.png": ["Kyrgyzstan", "Bishkek"],
  "laos.png": ["Laos", "Vientiane"],
  "latvia.png": ["Latvia", "Riga"],
  "lebanon.png": ["Lebanon", "Beirut"],
  "lesotho.png": ["Lesotho", "Maseru"],
  "liberia.png": ["Liberia", "Monrovia"],
  "libya.png": ["Libya", "Tripoli"],
  "liechtenstein.png": ["Liechtenstein", "Vaduz"],
  "lithuania.png": ["Lithuania", "Vilnius"],
  "luxembourg.png": ["Luxembourg", "Luxembourg City|Luxembourg"],
  "madagascar.png": ["Madagascar", "Antananarivo"],
  "malawi.png": ["Malawi", "Lilongwe"],
  "malaysia.png": ["Malaysia", "Kuala Lumpur"],
  "maldives.png": ["Maldives", "Male"],
  "mali.png": ["Mali", "Bamako"],
  "malta.png": ["Malta", "Valletta"],
  "marshall_islands.png": ["Marshall Islands", "Majuro"],
  "mauritania.png": ["Mauritania", "Nouakchott"],
  "mauritius.png": ["Mauritius", "Port Louis"],
  "mexico.png": ["Mexico", "Mexico City|Mexico"],
  "micronesia.png": ["Micronesia", "Palikir"],
  "moldova.png": ["Moldova", "Chisinau"],
  "monaco.png": ["Monaco", "Monaco"],
  "mongolia.png": ["Mongolia", "Ulaanbaatar"],
  "montenegro.png": ["Montenegro", "Podgorica"],
  "morocco.png": ["Morocco", "Rabat"],
  "mozambique.png": ["Mozambique", "Maputo"],
  "myanmar.png": ["Myanmar", "Naypyidaw"],
  "namibia.png": ["Namibia", "Windhoek"],
  "nauru.png": ["Nauru", "Yaren"],
  "nepal.png": ["Nepal", "Kathmandu"],
  "netherlands.png": ["Netherlands", "Amsterdam"],
  "new_zealand.png": ["New Zealand", "Wellington"],
  "nicaragua.png": ["Nicaragua", "Managua"],
  "niger.png": ["Niger", "Niamey"],
  "nigeria.png": ["Nigeria", "Abuja"],
  "north_korea.png": ["North Korea", "Pyongyang"],
  "north_macedonia.png": ["North Macedonia", "Skopje"],
  "norway.png": ["Norway", "Oslo"],
  "oman.png": ["Oman", "Muscat"],
  "pakistan.png": ["Pakistan", "Islamabad"],
  "palau.png": ["Palau", "Ngerulmud"],
  "panama.png": ["Panama", "Panama City|Panama"],
  "papua_new_guinea.png": ["Papua New Guinea", "Port Moresby"],
  "paraguay.png": ["Paraguay", "Asuncion"],
  "peru.png": ["Peru", "Lima"],
  "philippines.png": ["Philippines", "Manila"],
  "poland.png": ["Poland", "Warsaw"],
  "portugal.png": ["Portugal", "Lisbon"],
  "qatar.png": ["Qatar", "Doha"],
  "romania.png": ["Romania", "Bucharest"],
  "russia.png": ["Russia", "Moscow"],
  "rwanda.png": ["Rwanda", "Kigali"],
  "saint_kitts_and_nevis.png": ["Saint Kitts and Nevis", "Basseterre"],
  "saint_lucia.png": ["Saint Lucia", "Castries"],
  "saint_vincent_and_the_grenadines.png": [
    "Saint Vincent and the Grenadines",
    "Kingstown",
  ],
  "samoa.png": ["Samoa", "Apia"],
  "san_marino.png": ["San Marino", "San Marino"],
  "sao_tome_and_principe.png": ["Sao Tome and Principe", "Sao Tome"],
  "saudi_arabia.png": ["Saudi Arabia", "Riyadh"],
  "senegal.png": ["Senegal", "Dakar"],
  "serbia.png": ["Serbia", "Belgrade"],
  "seychelles.png": ["Seychelles", "Victoria"],
  "sierra_leone.png": ["Sierra Leone", "Freetown"],
  "singapore.png": ["Singapore", "Singapore"],
  "slovakia.png": ["Slovakia", "Bratislava"],
  "slovenia.png": ["Slovenia", "Ljubljana"],
  "solomon_islands.png": ["Solomon Islands", "Honiara"],
  "somalia.png": ["Somalia", "Mogadishu"],
  "south_africa.png": ["South Africa", "Pretoria|Cape Town|Bloemfontein"],
  "south_korea.png": ["South Korea", "Seoul"],
  "south_sudan.png": ["South Sudan", "Juba"],
  "spain.png": ["Spain", "Madrid"],
  "sri_lanka.png": ["Sri Lanka", "Sri Jayawardenepura Kotte|Colombo"],
  "sudan.png": ["Sudan", "Khartoum"],
  "suriname.png": ["Suriname", "Paramaribo"],
  "sweden.png": ["Sweden", "Stockholm"],
  "switzerland.png": ["Switzerland", "Bern"],
  "syria.png": ["Syria", "Damascus"],
  "taiwan.png": ["Taiwan", "Taipei"],
  "tajikistan.png": ["Tajikistan", "Dushanbe"],
  "tanzania.png": ["Tanzania", "Dodoma"],
  "thailand.png": ["Thailand", "Bangkok"],
  "togo.png": ["Togo", "Lome"],
  "tonga.png": ["Tonga", "Nuku'alofa|Nukualofa"],
  "trinidad_and_tobago.png": ["Trinidad and Tobago", "Port of Spain"],
  "tunisia.png": ["Tunisia", "Tunis"],
  "turkey.png": ["Turkiye", "Ankara"],
  "turkmenistan.png": ["Turkmenistan", "Ashgabat"],
  "tuvalu.png": ["Tuvalu", "Funafuti"],
  "uganda.png": ["Uganda", "Kampala"],
  "ukraine.png": ["Ukraine", "Kyiv"],
  "united_arab_emirates.png": ["United Arab Emirates", "Abu Dhabi"],
  "united_kingdom.png": ["United Kingdom", "London"],
  "united_states.png": [
    "United States",
    "Washington, D.C.|Washington, DC|Washington DC",
  ],
  "uruguay.png": ["Uruguay", "Montevideo"],
  "uzbekistan.png": ["Uzbekistan", "Tashkent"],
  "vanuatu.png": ["Vanuatu", "Port Vila"],
  "vatican_city.png": ["Vatican City", "Vatican City|Vatican"],
  "venezuela.png": ["Venezuela", "Caracas"],
  "vietnam.png": ["Vietnam", "Hanoi"],
  "yemen.png": ["Yemen", "Sana'a|Sanaa"],
  "zambia.png": ["Zambia", "Lusaka"],
  "zimbabwe.png": ["Zimbabwe", "Harare"],
};

let countries = Object.keys(countryData); // Array of filenames (keys from the dictionary)
let totalCountries = countries.length;
let currentCountryIndex = 0;
let totalSeconds = 0; // Total seconds for the stopwatch
let correctGuesses = 0;
let incorrectGuesses = 0;
let precision = 0; // Start precision at 0%

let stopwatchInterval; // Variable to hold the interval ID for the stopwatch

// Function to pick a random country
function pickRandomCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  let currentCountryName = countries[randomIndex]; // Store the current country filename
  return currentCountryName;
}

// Function to display the flag and country name
function displayCountry(countryName) {
  // Get the country name and capital from the dictionary
  const [country, capital] = countryData[countryName];

  // Ensure the flag image element is updated correctly
  flagImage.src = `Flags/${countryName}`; // Update flag image

  // Update the country name
  const countryNameElement = document.getElementById("country-name");
  countryNameElement.textContent = country; // Set the country name text

  // Store the current country and capital for later comparison
  currentCountryName = countryName; // Store the current country
  currentCapital = capital; // Store the current capital

  adjustCountryNameFontSize(country);
}

// Function to adjust the font size of the country name if it's too long
function adjustCountryNameFontSize(country) {
  const countryNameElement = document.getElementById("country-name");

  // Check if the country name is overflowing
  if (country.length > 15) {
    // If the text is too wide, reduce the font size
    countryNameElement.style.fontSize = "32px"; // Example smaller font size
  } else {
    // If the text fits, set the font size to the normal size
    countryNameElement.style.fontSize = "42px"; // Example larger font size
  }
}

// Function to pad single-digit numbers with leading zeros
function pad(val) {
  return val > 9 ? val : "0" + val;
}

// Function to start the stopwatch
function startStopwatch() {
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
  progressCounter.textContent = `${currentCountryIndex}/${totalCountries} | ${precision}%`;
}

// Handle guess function updated for file name display
function handleGuess() {
  const guess = countryGuess.value.trim().toLowerCase(); // Trim and convert to lowercase
  if (guess === "") {
    return; // Exit the function if the input field is empty
  }

  const correctCapital = countryData[currentCountryName][1]; // Use the currentCountryName directly

  const correctCapitals = correctCapital.split("|").map((c) => c.trim());
  if (
    correctCapitals.some((c) => c.toLowerCase() === guess) ||
    guess === correctCapital.toLowerCase()
  ) {
    message.textContent = "\n";
    countries = countries.filter((f) => f !== currentCountryName); // Remove guessed country
    currentCountryIndex++;
    correctGuesses++;
    precision = Math.round(
      (correctGuesses / (correctGuesses + incorrectGuesses)) * 100
    );
    if (currentCountryIndex === totalCountries) {
      submitButton.disabled = true;
      countries.length = 0; // Empty the countries array
      progressCounter.textContent = `${totalCountries}/${totalCountries} | ${precision}%`;
      handleWin();
    } else {
      displayCountry(pickRandomCountry());
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

// Function to handle skipping the country
function handleSkip() {
  if (currentCountryIndex < totalCountries - 1) {
    let newCountry = pickRandomCountry();
    while (newCountry === previousCountry) {
      newCountry = pickRandomCountry(); // Ensure a different country is picked
    }
    displayCountry(newCountry);
    countryGuess.value = "";
    previousCountry = newCountry;
    updateProgressCounter();
  } else {
    skipButton.disabled = true;
  }
}

// Function to handle win condition
function handleWin() {
  if (countries.length === 0) {
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
    centerModal(loseModal); // Center the modal after it's displayed
  }, 40); // Delay of 50ms should be enough
}

// Function to display lose modal
function displayLoseModal() {
  clearInterval(stopwatchInterval); // Clear the stopwatch interval
  const formattedTime = getFormattedTime(totalSeconds);
  const now = getCurrentDateTime();

  loseTime.textContent = formattedTime;
  loseScore.textContent = `${currentCountryIndex}/${totalCountries}`;
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

// Clear the input field on page load
window.onload = function () {
  countryGuess.value = "";
};

// Function to restart the game
function restartGame() {
  giveUpButton.disabled = false;
  countryGuess.value = "";
  winModal.style.display = "none";
  loseModal.style.display = "none";
  countries = Object.keys(countryData);
  totalSeconds = 0;
  correctGuesses = 0;
  incorrectGuesses = 0;
  currentCountryIndex = 0;
  precision = 0; // Reset precision to 0%
  updateProgressCounter();
  displayCountry(pickRandomCountry());
  submitButton.disabled = false;
  skipButton.disabled = false;
  startStopwatch();
}
// Function to handle give up button click
function handleGiveUp() {
  clearInterval(stopwatchInterval);
  document.getElementById("audio-give_up").play(); // Play give up audio
  displayLoseModal();
  centerModal(loseModal); // Center the lose modal
}

// Call displayCountry to initialize
displayCountry(pickRandomCountry());
updateProgressCounter();

// Add event listener to submit button
submitButton.addEventListener("click", handleGuess);

// Add event listener to input box to listen for Enter key press
countryGuess.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    // Enter key
    event.preventDefault(); // Prevent default form submission behavior
    handleGuess(); // Call handleGuess function to submit the guess
  }
});

let previousCountry = null; // Track the previously skipped country
// Add event listener to skip button
skipButton.addEventListener("click", handleSkip);
// Add event listener to give up button
giveUpButton.addEventListener("click", handleGiveUp);
// Add event listeners to restart buttons
restartWinButton.addEventListener("click", restartGame);
restartLoseButton.addEventListener("click", restartGame);
submitButton.addEventListener("click", handleGuess);

// Start the stopwatch
startStopwatch();
