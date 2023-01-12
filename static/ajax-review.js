// PART 1: SHOW A FORTUNE

function showFortune() {
  // TODO: get the fortune and show it in the fortune-text div
  fetch('/fortune')
    .then((response) => response.text())
    .then((fortuneData) => {
      document.querySelector('#fortune-text').innerHTML = fortuneData;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;

  fetch(`${url}`)
    .then((response) => response.json())
    .then((weatherObj) => {
      document.querySelector('#weather-info').innerHTML = weatherObj.forecast;
    })
  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);
