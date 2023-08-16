<template>
  <h1>Coins</h1>

  <div class="container"></div>
  <div class="load-more">
    <button id="load-more-button">Carregar Mais</button>
  </div>
</template>
<script setup>
import { readCoins } from '@/model/services'

function fetchAndDisplayCoins(coinsData) {
  const container = document.querySelector('.container')

  Object.keys(coinsData).forEach((coin) => {
    const coinInfo = coinsData[coin]
    const name = coinInfo.name
    const imageUrl = coinInfo.image
    const price = coinInfo.current_price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    const change = coinInfo.price_change_percentage_24h || 0
    const changeFormatted = (change >= 0 ? '+' : '') + change.toFixed(2) + '%'

    const coinElement = document.createElement('div')
    coinElement.className = `coin ${change < 0 ? 'falling' : 'rising'}`
    coinElement.innerHTML = `
      <div class="coin-logo">
        <img src="${imageUrl}" alt="${name} Logo">
      </div>
      <div class="coin-name">
        <h3>${name}</h3>
        <span>/USD</span>
      </div>
      <div class="coin-price">
        <span class="price">${price}</span>
        <span class="change ${change < 0 ? 'falling' : 'rising'}">${changeFormatted}</span>
      </div>
    `

    container.appendChild(coinElement)
  })
}

readCoins()
  .then((json) => {
    fetchAndDisplayCoins(json)
  })
  .catch((error) => {
    console.error('Erro ao buscar moedas:', error)
  })
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Tilt+Prism&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 140vh;
  display: flex;
  justify-content: center;
  font-family: 'Mukta', sans-serif;
  background-image: url(../img/background.svg);
  background-size: cover;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
}

.coin {
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin: 20px;
  background-color: #080531;
  display: flex;
  flex-direction: column; /* Changed to column layout */
  justify-content: space-between; /* Space between name & values */
  align-items: center; /* Center items horizontally */
  padding: 20px;
}

.coin-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.coin-logo img {
  max-width: 60px;
  max-height: 60px;
}

.coin-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.rising {
  color: rgb(6, 204, 6);
}

.falling {
  color: red;
}

.coin-name h3 {
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.coin-name span {
  color: #aaa;
  font-size: 14px;
  font-weight: 500;
}

.coin-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.coin-price .price {
  font-size: 24px;
  font-weight: 700;
  color: #30ff20;
  line-height: 1;
}

.coin-price .change {
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 80px;
  top: 0;
  color: #00ac0e;
}

/* Media Queries */
@media (max-width: 768px) {
  .coin-name h3 {
    font-size: 16px;
  }

  .coin-name span {
    font-size: 12px;
  }

  .coin-price .price {
    font-size: 20px;
  }

  .coin-price .change {
    font-size: 10px;
  }
}
h3 {
  color: white;
}
.load-more {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#load-more-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center  !important;
  text-align: center !important;
  margin-bottom: 20px;
}

#load-more-button:hover {
  background-color: #2980b9;
}
</style>