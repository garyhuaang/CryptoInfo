import { memo, useEffect, useRef, useState } from 'react'

import { fetchExchangeInfo, fetchTickerData } from '../../../../service/api'
import TickerList from '../TickerList'
import FeatureHeader from '@src/components/FeatureHeader'
import Grid from '../../../../components/Grid'

// const [exchangeInfo, setExchangeInfo] = useState();
// Fetch exchange data
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
const ExhchangeInfo = () => {
  const [exchangeData, setExchangeData] = useState([])
  const [tickerData, setTickerData] = useState([])
  const exchangeDataRef = useRef(exchangeData)

  useEffect(() => {
    fetchExchangeInfo()
      .then(info => {
        setExchangeData(info)
        exchangeDataRef.current = info
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetchTickerData()
      .then(data => setTickerData(data))
      .catch(err => console.error(err))
  }, [])

  if (exchangeData) {
    console.log('exchangeData', exchangeData)
  }

  return (
    <>
      {exchangeDataRef?.current?.data?.currencies && (
        <Grid array={exchangeDataRef?.current?.data?.currencies} />
      )}
      <TickerList tickerData={tickerData} />
      {/* <FeatureHeader title='Exchange info' /> */}
    </>
  )
}

export default memo(ExhchangeInfo)
