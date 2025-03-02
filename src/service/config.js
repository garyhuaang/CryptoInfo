// https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-02-10
// ?adjusted=true&sort=asc&//apiKey=wimqb02_2TdEz7whNdD7Liiofdj9Jv4t

// https://api.polygon.io/v2/reference/news?ticker={stockticker}&published_utc={published_utc}&order=asc&limit=10&apiKey=wimqb02_2TdEz7whNdD7Liiofdj9Jv4t

const config = {
  KlineDataUrl:
    'http://localhost:3001/api/klines?symbol={symbol}&resolution={resolution}&from={from}&to={to}',
}

export default config
