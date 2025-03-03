import axios from "axios";
import express from "express";
import cors from "cors";

const PORT = 3001;
const app = express();

app.use(cors());

app.get("/api/klines", async (req, res) => {
  try {
    const { symbol, resolution, from, to } = req.query;
    const url = `https://graph-api.btcturk.com/v1/klines/history?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`;

    const resp = await axios.get(url);

    if (resp.status !== 200)
      throw new Error(`HTTP error! Status: ${resp.status}`);

    res.json(resp.data);
  } catch (err) {
    console.error("Unable to fetch Kline data: ", err.message);
    res.status(500).json({ error: "Error fetching Kline Data from upstream" });
  }
});

app.get("/api/exchangeinfo", async (req, res) => {
  try {
    const url = "https://api.btcturk.com/api/v2/server/exchangeinfo";
    const response = await fetch(url).then((data) => data.json());
    res.json(response);
  } catch (err) {
    res.status(500).json({
      error: `Error fetching Exchange info data from upstream: ${err}`,
    });
  }
});

app.get("/api/ticker", async (req, res) => {
  try {
    const url = "https://api.btcturk.com/api/v2/ticker/currency";
    const resp = await fetch(url).then((data) => data.json());
    res.json(resp);
  } catch (err) {
    res
      .status(500)
      .json({ error: `Error fetching ticker data from upstream: ${err}` });
  }
});

app.listen(PORT, console.log("Server listening on PORT: ", PORT));
