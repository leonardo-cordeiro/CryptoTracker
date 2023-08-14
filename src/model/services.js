import axios from 'axios';

export async function readCoins() {
    return await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2C%20Ethereum%2C%20Tether%2C%20Binance%20Coin%2C%20XRP%2C%20USD%20Coin%2C%20Cardano%2C%20Dogecoin%2C%20Solana%2C%20TRON%2C%20Polygon%2C%20Litecoin%2C%20Polkadot%2C%20Shiba%20Inu%2C%20Dai%2C%20Wrapped%20Bitcoin%2C%20Bitcoin%20Cash%2C%20Avalanche%2C%20Toncoin%2C%20Chainlink%2C%20Stellar%2C%20UNUS%20SED%20LEO%2C%20Uniswap%2C%20Binance%20USD%2C%20TrueUSD%2C%20Cosmos%2C%20Monero%2C%20OKB%2C%20Ethereum%20Classic%2C%20Hedera%20Hashgraph%2C%20Filecoin%2C%20Internet%20Computer%2C%20Lido%20DAO%20Token%2CMantle%20Network%20Token%2CAptos%20Token%20%2CArbitrum%20One%2CCrypto.com%20Coin%2CVeChain%20%2CNEAR%20Protocol%20%2CQuant%20%2CMaker%20%2COptimism%20%2CThe%20Graph%2CAave%20%2CAlgorand%2CXDC%20Network%20%2CThe%20Sandbox%20%2CStacks%2CAxie%20Infinity%2CMultiversX%2CEOS%20%2CImmutable%20X%20%2CTezos%20%2CUSDD%2CTheta%20Network%2CBitcoin%20SV%20%2CDecentraland%2CSynthetix%2CApeCoin%20%2CInjective%2CFantom%20%2CRender%20%2CNeo%2CeCash%20%2CFlow&vs_currencies=usd&include_24hr_change=true').then((response) => response.data)
  }
