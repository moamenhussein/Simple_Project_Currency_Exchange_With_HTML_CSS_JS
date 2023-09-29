let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let usd = document.querySelector(".usd");
let sar = document.querySelector(".sar");
let eur = document.querySelector(".eur");

fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=01d694e342e6488d87f481a2de4adb58"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((api) => {
    btn.addEventListener("click", () => {
      usd.innerHTML = Math.round(input.value * api.rates.USD);
      sar.innerHTML = Math.round(input.value * api.rates.SAR);
      eur.innerHTML = Math.round(input.value * api.rates.EUR);
      input.value = "";
    });
  });
