'use strict';

const API_KEY = '0e2aaab47eeff57febd00c12095ab916';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`you live in ${lat} ${lon}`);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('.weather span:first-child');
      const city = document.querySelector('.weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Sorry I can't find you... No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
