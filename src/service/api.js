import axios from "axios";
import config from "./config";

export const fetchKlineData = async (symbol, resolution, from, to) => {
  const url = config.KlineDataUrl.replace("{symbol}", symbol)
    .replace("{resolution}", resolution)
    .replace("{from}", from)
    .replace("{to}", to);

  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.log("Error fetching Kline data", err);
    throw err;
  }
};

export const fetchKlineDataPromiseFetch = (symbol, resolution, from, to) => {
  const url = config.KlineDataUrl.replace("{symbol}", symbol)
    .replace("{resolution}", resolution)
    .replace("{from}", from)
    .replace("{to}", to);

  return new Promise((res, rej) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok)
          throw new Error("Failed to fetch data Status: " + resp.status);
        return resp.json();
      })
      .then((data) => res(data))
      .catch((err) => {
        console.error("Error fetching Kline data", err);
        rej(err);
      });
  });
};

export async function fetchAllKlineData(symbol, resolution, from, to) {
  const url = config.KlineDataUrl.replace("{symbol}", symbol)
    .replace("{resolution}", resolution)
    .replace("{from}", from)
    .replace("{to}", to);

  try {
    const resp = await fetch(url);
    return resp.json();
  } catch (err) {
    throw new Error(`Failed to fetch kline data: ${err}`);
  }
}

export async function fetchExchangeInfo() {
  const url = config.ExchangeInfoUrl;
  const options = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };

  try {
    const resp = await fetch(url, options);

    if (!resp.ok) throw new Error(`HTTP error! Status: ${resp.status}`);

    return resp.json();
  } catch (err) {
    throw new Error(`Failed to fetch exchange info: ${err}`);
  }
}

export async function fetchTickerData() {
  const url = config.TickerDataUrl;
  const options = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };

  try {
    const resp = await fetch(url, options);

    if (!resp.ok) throw new Error(`HTTP error! Status: ${resp.status}`);

    return resp.json();
  } catch (err) {
    throw new Error(`Failed to fetch ticker data: ${err}`);
  }
}
