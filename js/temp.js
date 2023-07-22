//my key : 35fddb0bee1f7d03670c583790324ad6

const loadTemperature = (myCity) => {
  const api_key = `4444c4aba5ed98c5a234f4dcd2400454`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

const displayTemp = (data) => {
  console.log(data);
  const cityName = document.getElementById("cityName");
  const displayTempId = document.getElementById("displayTempId");
  const weatherDisplay = document.getElementById("weatherDisplay");
  cityName.innerText = data.name;
  displayTempId.innerText = data.main.temp;
  weatherDisplay.innerText = data.weather[0].main;
};

const displayTempAndCity = () => {
  const inputField = document.getElementById("inputWeatherID");
  const inputFieldText = inputField.value;
  if (inputFieldText === "") {
    alert("give the name of the city");
  } else {
    loadTemperature(inputFieldText);
  }
};
//display with mouse enter:
document
  .getElementById("inputWeatherID")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      displayTempAndCity();
    }
  });

//display with button:

document
  .getElementById("weatherSearchButton")
  .addEventListener("click", function () {
    displayTempAndCity();
  });
