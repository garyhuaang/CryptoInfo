import axios from 'axios'
import config from './config'

export async function fetchKlineData(symbol, resolution, from, to) {
  const baseUrl = config.KlineDataUrl.replace('{symbol}', symbol)
    .replace('{from}', from)
    .replace('{resolution}', resolution)
    .replace('{to}', to)

  console.log(baseUrl)

  try {
    const response = await axios.get(baseUrl)
    return response
  } catch (err) {
    console.log('Error fetching kline data: ', err)
    throw err
  }
}
