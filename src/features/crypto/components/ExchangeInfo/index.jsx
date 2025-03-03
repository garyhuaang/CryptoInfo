import { useQuery } from "@tanstack/react-query";

import { memo } from "react";
import FeatureHeader from "/src/components/FeatureHeader";
import { fetchExchangeInfo, fetchTickerData } from "../../../../service/api";
import TickerList from "../TickerList";

const ExhchangeInfo = () => {
  // const [exchangeInfo, setExchangeInfo] = useState();
  // Fetch exchange data
  const {
    data: exchangeData,
    error: exchangeError,
    isLoading: isExchangeLoading,
  } = useQuery({
    queryKey: ["exchangeData"],
    queryFn: fetchExchangeInfo,
  });

  // Fetch ticker data
  const {
    data: tickerData,
    error: tickerError,
    isLoading: isTickerLoading,
  } = useQuery({
    queryKey: ["tickerData"],
    queryFn: fetchTickerData,
  });

  if (isExchangeLoading || isTickerLoading) {
    return <div>Loading...</div>;
  }

  if (exchangeError || tickerError) {
    return <div>Error: {exchangeError?.message || tickerError?.message}</div>;
  }

  // useEffect(() => {
  //   fetchExchangeInfo()
  //     .then((data) => {
  //       console.log(data);
  //       setExchangeInfo(data);
  //     })
  //     .catch((err) => {
  //       console.error("Exchange info failed downstream - ", err);
  //     });
  // }, []);

  return (
    <>
      <TickerList tickerData={tickerData} />
      <FeatureHeader title="Exchange info" />
      <pre>{JSON.stringify(exchangeData, null, 2)}</pre>
    </>
  );
};

export default memo(ExhchangeInfo);
