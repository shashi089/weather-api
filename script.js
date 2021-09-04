let apiKey = "78e08b1fbebdbdb561bafb202a233c85"; // API key

// function to fetch Weather API using city name
async function fetchWeather(cityname) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`
    );
    let data = await response.json();
    // console.log(data);
    displayWeather(data);
  } catch {
    alert("No weather found.");
    document.querySelector(".search-bar").value = "";
  }
}

// function to Display Weather data
function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(
    ".weather"
  ).innerHTML = `<h2 class="city">Weather in ${name}</h2>
  <h1 class="flex">
    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon" />
    <div class="description">${description}</div>
  </h1>
  <h2 class="temp">${(temp - 273.15).toFixed(2)}°C</h2>

  <div class="humidity">Humidity: ${humidity}%</div>
  <div class="wind">Wind speed: ${speed} km/h</div>`;
  document.querySelector(".weather").classList.remove("loading");
  document.querySelector(".search-bar").value = ""; // resets input text
}

// Function to search weather data
function search() {
  let city = document.querySelector(".search-bar").value; // stores input value in variable.
  fetchWeather(city);
}

// Clicking on the Search button will call  a search function
document.querySelector(".search button").addEventListener("click", search);

// Clicking on the enter will call a search function
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });

fetchWeather("Belagavi"); // default weather data
