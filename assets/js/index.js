const showCrypto = function () {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Ccardano%2Csolana%2Cdogecoin&vs_currencies=brl&include_24hr_change=true"
  )
    .then((response) => response.json())
    .then((json) => {
      const container = document.querySelector(".container-crypto");
      const coins = Object.getOwnPropertyNames(json);

      for (let coin of coins) {
        const coinInfo = json[`${coin}`];
        const price = coinInfo.brl;
        const change = coinInfo.brl_24h_change.toFixed(5);

        container.innerHTML += `
        <div class="coin ${change < 0 ? "decreasing" : "increasing"}">
          <div class="coin-logo">
            <img src="assets/img/${coin}.png">
          </div>
          <div class="coin-name">
            <h3>${coin}</h3>
            <span>/BRL</span>
          </div>
          <div class="coin-price">
            <span class="price">R$${price}</span>
            <span class="change">R$${change}</span>
          </div>
        </div>
      `;
        container.style.opacity = 100;
      }
    });
};
const btnShow = document.querySelector(".btn-container");

btnShow.addEventListener("click", function () {
  showCrypto();
  btnShow.style.opacity = 0;
  btnShow.style.width = 50 + "%";
});
