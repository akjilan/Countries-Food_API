//my key : 35fddb0bee1f7d03670c583790324ad6
//display with mouse enter:
document
.getElementById("inputWeatherID")
.addEventListener("keypress", function (event) {
if (event.key === "Enter") {
  event.preventDefault();
  displayTempAndCity();
}
});



const loadTemperature = (myCity) => {
  const api_key = `4444c4aba5ed98c5a234f4dcd2400454`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

const displayTemp = (data) => {
  console.log(data);
  const displayTempId = document.getElementById("displayTempId");
  displayTempId.innerText = data.main.temp;
};

const displayTempAndCity = () => {
  const inputField = document.getElementById("inputWeatherID");
  const inputFieldText = inputField.value;
  const cityName = document.getElementById("cityName");
  if (inputFieldText === "") {
    alert("give the name of the city");
  } else {
    cityName.innerText = inputFieldText;
    loadTemperature(inputFieldText);
    
  }
};

document
  .getElementById("weatherSearchButton")
  .addEventListener("click", function () {
    displayTempAndCity();
  });








/////////////
// const inputElement = document.getElementById("myInput");

// inputElement.addEventListener("keyup", function() {
//   const inputValue = inputElement.value.trim();

//   if (inputValue === "") {
//     alert("Please enter a value in the input field.");
//   } else {
//     // Perform further actions when input is not empty
//     console.log("Input value:", inputValue);
//   }
// });
