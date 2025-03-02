import { memo, useContext, useEffect, useState } from "react";
import { formatUnixTimestamp, KLINE_SERIES_CONFIG } from "./utils";
import { Actions } from "../../hooks/cryptoFormReducer";

import FeatureHeader from "../../components/FeatureHeader";
import { Column, Row } from "../../components/Common";
import { CryptoContext } from "../../app/context";
import StyledCard from "/src/components/Card";
import { fetchKlineData } from "/src/service/configuration";
import Chart from "../../components/Chart";

const KlineChart = () => {
  const { state, dispatch } = useContext(CryptoContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function getKlineData() {
      try {
        const data = await fetchKlineData("BTCTRY", 60, 1602925320, 1603152000);
        setChartData(data); // Set the state with the resolved data.
      } catch (error) {
        console.error("Error fetching kline data:", error);
      }
    }
    getKlineData();
  }, []);

  useEffect(() => {
    if (!chartData.t || chartData.t.length === 0) return;

    const openSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.o[i],
    }));

    const highSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.h[i],
    }));
    const lowSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.l[i],
    }));
    const closeSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.c[i],
    }));

    const allData = [openSeries, highSeries, lowSeries, closeSeries];

    console.log("allData", allData);

    dispatch({
      type: Actions.SET_KLINE_DATA,
      payload: {
        ticker: "BTCTRY",
        resolution: 60,
        from: 1602925320,
        to: 1603152000,
        timestamp: chartData.t.map((time) => formatUnixTimestamp(time)),
        high: chartData.h,
        low: chartData.l,
        open: chartData.o,
        close: chartData.c,
        volume: chartData.v,
        combinedValueArr: allData,
      },
    });
  }, [chartData]);

  return (
    <Column>
      <FeatureHeader title="Stock news" />
      <Row>
        <StyledCard
          title="Is this company profitable?"
          description="Submit the info below and find out"
        />
      </Row>
      <Chart
        seriesConfig={KLINE_SERIES_CONFIG}
        height="300px"
        width="300px"
        data={state?.kline?.combinedValueArr}
      />
    </Column>
  );
};

export default memo(KlineChart);
