<template>
  <div
    class="flex bg-[url('src/img/background.jpg')] w-100% heigth-100% flex-wrap content-center justify-center flex-row h-screen"
  >
  <h1 class="flex justify-center items-center text-center text-6xl text-yellow-400 font-bebas">Coins</h1>
    <BaseInput v-model="search" @search="onreadCoins" placeholder="Pesquise a moeda" />
    


    <div class="flex flex-wrap content-center flex-row mt-6 ">
      <div v-for="coin in coins" :key="coin.id">
        <div class="flex flex-column justify-between items-center bg-#080531 ">
          <!-- .coin {
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
} -->
          <div class="coin-logo">
            <img :src="coin.image" :alt="coin.name + 'Logo'" />
          </div>
          <div class="coin-name">
            <h3>{{ coin.name }}</h3>
            <span>/USD</span>
          </div>
          <div class="coin-price">
            <span class="price">{{ coin.price }}</span>
            <span class="change ${change < 0 ? 'falling' : 'rising'}">{{
              coin.changeFormatted
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <button id="right-arrow">➡️</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { readCoins } from '@/model/services'
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'

let currentPage = 1
const coins = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 25992,
    market_cap: 506675711629,
    market_cap_rank: 1,
    fully_diluted_valuation: 546637011669,
    total_volume: 10481723798,
    high_24h: 26206,
    low_24h: 25874,
    price_change_24h: -87.13684634878518,
    price_change_percentage_24h: -0.33413,
    market_cap_change_24h: 206351816,
    market_cap_change_percentage_24h: 0.04074,
    circulating_supply: 19464818,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -62.30672,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 38280.21205,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2023-08-22T13:57:17.867Z'
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 1655.8,
    market_cap: 199491466803,
    market_cap_rank: 2,
    fully_diluted_valuation: 199491466803,
    total_volume: 6027400180,
    high_24h: 1678.95,
    low_24h: 1655.85,
    price_change_24h: -17.464914721551622,
    price_change_percentage_24h: -1.04376,
    market_cap_change_24h: -1188494238.8683472,
    market_cap_change_percentage_24h: -0.59223,
    circulating_supply: 120211067.730788,
    total_supply: 120211067.730788,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -65.95528,
    ath_date: '2021-11-10T14:24:19.604Z',
    atl: 0.432979,
    atl_change_percentage: 383473.06861,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 84.14506500521075,
      currency: 'btc',
      percentage: 8414.506500521074
    },
    last_updated: '2023-08-22T13:57:15.649Z'
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
    current_price: 0.999781,
    market_cap: 82826074050,
    market_cap_rank: 3,
    fully_diluted_valuation: 82826074050,
    total_volume: 15174709657,
    high_24h: 1.003,
    low_24h: 0.997353,
    price_change_24h: -0.000606937612765535,
    price_change_percentage_24h: -0.06067,
    market_cap_change_24h: -60541827.46513367,
    market_cap_change_percentage_24h: -0.07304,
    circulating_supply: 82846484080.7792,
    total_supply: 82846484080.7792,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.39553,
    ath_date: '2018-07-24T00:00:00.000Z',
    atl: 0.572521,
    atl_change_percentage: 74.72182,
    atl_date: '2015-03-02T00:00:00.000Z',
    roi: null,
    last_updated: '2023-08-22T13:55:00.296Z'
  }
] //ref([])//
const search = ref('')

function updatePage(increment) {
  currentPage += increment

  if (currentPage < 1) {
    currentPage = 1
  }

  readCoins(currentPage)
    .then((json) => {
      coins.value = json
      // fetchAndDisplayCoins(json)
    })
    .catch((error) => {
      console.error('Erro ao buscar moedas:', error)
    })
}

onMounted(() => {
  document.querySelector('#right-arrow').addEventListener('click', () => {
    updatePage(1)
  })
})

updatePage(0)
</script>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Tilt+Prism&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  font-weight: bold;
}

.coin-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.coin-price .price {
  font-size: 24px;
  font-weight: bold;
  color: #30ff20;
  line-height: 1;
}

.coin-price .change {
  font-size: 12px;
  font-weight: bold;
  margin-top: 4px;
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

#right-arrow:hover {
  background-color: #1a1a4e;
}
</style> -->
