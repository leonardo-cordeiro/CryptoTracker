import axios from 'axios';

export async function readCoins() {
    return await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en').then((response) => response.data)
  }
