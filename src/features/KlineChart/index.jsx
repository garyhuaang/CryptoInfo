import { memo, useContext, useEffect } from 'react'

import FeatureHeader from '../../components/FeatureHeader'
import { Column, Row } from '../../components/Common'
import { StockContext } from '../../app/context'
import StyledCard from '/src/components/Card'
import { fetchKlineData } from '/src/service/configuration'

const KlineChart = () => {
  const { state, dispatch } = useContext(StockContext)

  // const fromDate = new Date('2020-10-17T00:00:00Z')
  // const toDate = new Date('2020-10-19T00:00:00Z')

  useEffect(() => {
    async function getNews() {
      const news = await fetchKlineData('BTCTRY', 60, 1602925320, 1603152000)
      console.log(news)
    }

    getNews()
  }, [])

  return (
    <Column>
      <FeatureHeader title='Stock news' />
      <Row>
        <StyledCard
          title='Is this company profitable?'
          description='Submit the info below and find out'
        />
      </Row>
    </Column>
  )
}

export default memo(KlineChart)
