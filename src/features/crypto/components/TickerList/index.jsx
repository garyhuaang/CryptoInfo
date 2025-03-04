import { memo, useEffect, useState } from 'react'
import { fetchTickerData } from '../../../../service/api'
import { List, ListItem } from '@chakra-ui/react'

const TickerList = () => {
  const [tickerList, setTickerList] = useState([])

  useEffect(() => {
    fetchTickerData()
      .then(data => setTickerList(data))
      .catch(err => console.log(`Ticker data failed downstream - ${err}`))
    // console.log('tickerList', tickerList)
  }, [])

  useEffect(() => {
    // console.log('tickerList updated:', tickerList)
  }, [tickerList])

  return (
    <>
      {tickerList.length && (
        <>
          {tickerList.map(ticker => (
            <div>{ticker}</div>
          ))}
        </>
      )}
    </>
  )
}

export default memo(TickerList)
