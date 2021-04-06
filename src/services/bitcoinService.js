export const bitcoinService ={
    getRate,
    getMarketPrice
}

const axios = require('axios')

async function getMarketPrice() {
    let price = await axios.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true")
    return price.data
}

async function getRate(coins) {
    let rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return rate.data
}