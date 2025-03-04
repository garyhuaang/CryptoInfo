import { memo } from 'react'
import { Column } from '/src/components/Common'
import FeatureHeader from '/src/components/FeatureHeader'

function Home() {
  return (
    <Column>
      <FeatureHeader title='No better time than now...' />
    </Column>
  )
}

export default memo(Home)
