import { memo } from 'react'
import { Column } from '../../components/Common'
import FeatureHeader from '../../components/FeatureHeader'

function Home() {
  return (
    <Column>
      <FeatureHeader title='No better time than now...' />
    </Column>
  )
}

export default memo(Home)
