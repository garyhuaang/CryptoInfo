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

    res.json(resp.data);
  } catch (err) {
    console.error("Unable to fetch Kline data: ", err.message);
    res.status(500).json({ error: "Error fetching Kline Data from upstream" });
  }
});

app.listen(PORT, console.log("Server listening on PORT: ", PORT));
