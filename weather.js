const API_KEY = "1c5528ad01d516f681ab4a37495d45d3";

const weather = document.querySelector(".js-weather");

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const location = json.name;
      weather.innerText = `${temperature}℃ @ ${location}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  getWeather(lat, lng);
}

function handleGeoFail() {
  console.log("Cannot load the current location.");
}

function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

init();
