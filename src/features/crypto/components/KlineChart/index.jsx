import { memo, useContext, useEffect, useState } from 'react'
import { formatUnixTimestamp, KLINE_SERIES_CONFIG } from './utils'
import Actions from '../../actions'
import FeatureHeader from '/src/components/FeatureHeader'
import { Column, Row } from '/src/components/Common'
import { CryptoContext } from '/src/features/crypto/provider'
import StyledCard from '/src/components/Card'
import { fetchAllKlineData } from '/src/service/api'
import Chart from '/src/components/Chart'

const KlineChart = () => {
  const { state, dispatch } = useContext(CryptoContext)
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    fetchAllKlineData('BTCTRY', 60, 1602925320, 1603152000)
      .then(data => {
        setChartData(data)
      })
      .catch(err => console.log('Error fetching kline data', err))
  }, [])

  useEffect(() => {
    if (!chartData.t || chartData.t.length === 0) return

    const openSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.o[i],
    }))

    const highSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.h[i],
    }))
    const lowSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.l[i],
    }))
    const closeSeries = chartData.t.map((time, i) => ({
      time: time,
      value: chartData.c[i],
    }))

    const allData = [openSeries, highSeries, lowSeries, closeSeries]

    console.log(allData)

    dispatch({
      type: Actions.SET_KLINE_DATA,
      payload: {
        ticker: 'BTCTRY',
        resolution: 60,
        from: 1602925320,
        to: 1603152000,
        timestamp: chartData.t.map(time => formatUnixTimestamp(time)),
        high: chartData.h,
        low: chartData.l,
        open: chartData.o,
        close: chartData.c,
        combinedValueArr: allData,
      },
    })
  }, [chartData])

  return (
    <Column>
      <FeatureHeader title='Kline data' />
      <Row>
        <StyledCard
          title='Is this company profitable?'
          description='Submit the info below and find out'
        />
      </Row>
      <Chart
        seriesConfig={KLINE_SERIES_CONFIG}
        height='300px'
        width='300px'
        data={state?.kline?.combinedValueArr}
      />
    </Column>
  )
}

export default memo(KlineChart)
