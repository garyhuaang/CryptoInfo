import { memo } from 'react'
import { Column, Row } from '../Common'

const FeatureHeader = ({ title, prefix, suffix }) => {
  return (
    <Row>
      <Column style={{ marginLeft: '50px' }}>
        {prefix}
        <h1>{title}</h1>
      </Column>
      {suffix}
    </Row>
  )
}

export default memo(FeatureHeader)
