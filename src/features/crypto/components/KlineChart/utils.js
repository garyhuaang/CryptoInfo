export const KLINE_SERIES_CONFIG = [
  { key: "open", lineColor: "orange" },
  { key: "close", lineColor: "green" },
  { key: "high", lineColor: "red" },
  { key: "low", lineColor: "blue" },
  { key: "volume", lineColor: "purple" },
];

export function mapSeriesData(timeArr, valueArr) {
  console.log(timeArr, valueArr);
  return timeArr.map((time, i) => [
    time, // or convert to a Date/string if needed
    valueArr[i],
  ]);
}

export function formatUnixTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
