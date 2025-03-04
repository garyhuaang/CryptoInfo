import { AreaSeries, createChart, ColorType } from 'lightweight-charts'
import React, { memo, useEffect, useRef } from 'react'
import { Column } from '../Common'

const defaultLineColors = ['#2962FF', 'orange', 'green', 'red', 'purple']

const Chart = ({
  data = [],
  chartWidth = 600,
  chartHeight = 300,
  backgroundColor = 'black',
  textColor = 'white',
}) => {
  const chartContainerRef = useRef(null)

  useEffect(() => {
    if (!chartContainerRef.current) {
      console.error('Chart container not found')
      return
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartWidth,
      height: chartHeight,
    })
    chart.timeScale().fitContent()

    data.forEach((seriesData, index) => {
      const lineColor = defaultLineColors[index] || '#2962FF'

      if (!Array.isArray(seriesData) || seriesData.length === 0) {
        console.warn(`Series ${index} is empty or not an array`)
        return
      }

      const series = chart.addSeries(AreaSeries, {
        lineColor,
        topColor: 'transparent',
        bottomColor: 'transparent',
      })

      const newData = seriesData.map(point => ({
        time: point.time,
        value: point.value,
      }))

      series.setData(newData)
    })

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth })
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [data, backgroundColor, textColor, chartWidth, chartHeight])

  return (
    <Column style={{ width: '100%' }}>
      <div
        ref={chartContainerRef}
        style={{
          border: '1px solid #ccc',
        }}
      />
    </Column>
  )
}

export default memo(Chart)
