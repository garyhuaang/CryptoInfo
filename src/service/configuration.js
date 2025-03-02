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
