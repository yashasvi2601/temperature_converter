let celciusInput = document.querySelector("#Celcius > input");
let fahrenheitInput = document.querySelector("#Fahrenheit > input");
let kelvinInput = document.querySelector("#Kelvin > input");

let btn = document.querySelector("#clear");
let convert = document.querySelector("#convert");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

// celciusInput.addEventListener("click", function () {
//   let cTemp = parseFloat(celciusInput.value);
//   let fTemp = cTemp * (9 / 5) + 32;
//   let kTemp = cTemp + 273.15;
//   fahrenheitInput.value = roundNumber(fTemp);
//   kelvinInput.value = roundNumber(kTemp);
// });

// fahrenheitInput.addEventListener("click", function () {
//   let fTemp = parseFloat(fahrenheitInput.value);
//   let cTemp = (fTemp - 32) * (5 / 9);
//   let kTemp = cTemp + 273.15;
//   celciusInput.value = roundNumber(cTemp);
//   kelvinInput.value = roundNumber(kTemp);
// });

// kelvinInput.addEventListener("click", function () {
//   let kTemp = parseFloat(kelvinInput.value);
//   let cTemp = kTemp - 273.15;
//   let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
//   celciusInput.value = roundNumber(cTemp);
//   fahrenheitInput.value = roundNumber(fTemp);
// });
function clearInputFields() {
  celciusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
}

btn.addEventListener("click", clearInputFields);
celciusInput.addEventListener("click", clearInputFields);
fahrenheitInput.addEventListener("click", clearInputFields);
kelvinInput.addEventListener("click", clearInputFields);

convert.addEventListener("click", () => {
  if (celciusInput.value !== "") {
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = cTemp * (9 / 5) + 32;
    let kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else if (fahrenheitInput.value !== "") {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = cTemp + 273.15;
    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else if (kelvinInput.value !== "") {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
  }
});
