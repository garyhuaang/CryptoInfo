import { memo, useEffect, useState } from 'react'
import { Column } from '@src/components/Common'

const MyGrid = ({ children, columns }) => {
  return (
    <div
      style={{
        display: 'grid',
        marginTop: '50px',
        flex: 1,
        gridTemplateColumns: `repeat(${columns}, minmax(10px, 1fr))`, // Ensures responsive column sizing
        gap: '5px',
        width: '100%',
        overflow: 'auto', // Enables scrolling if needed
      }}
    >
      {children}
    </div>
  )
}

const GridCell = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '40px',
        textAlign: 'left',
        padding: '8px',
        borderBottom: '1px solid #ddd',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Truncate long text
      }}
    >
      {children}
    </div>
  )
}

const HeaderCell = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '40px',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '10px',
        borderBottom: '2px solid #000',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      title={children} // Show full text on hover
    >
      {children}
    </div>
  )
}

const Grid = ({ array }) => {
  const [gridData, setGridData] = useState([])
  const [columns, setColumns] = useState(0)

  useEffect(() => {
    if (array && Array.isArray(array) && array.length > 0) {
      setGridData(array)
      setColumns(Object.keys(array[0]).length)
    }
  }, [array])

  return (
    <Column
      style={{
        height: '100vh',
        padding: '10px',
        overflowX: 'hidden',
      }}
    >
      <MyGrid columns={columns}>
        {/* Render Headers */}
        {gridData.length > 0 &&
          Object.keys(gridData[0]).map((header, index) => (
            <HeaderCell key={`header-${index}`}>{header}</HeaderCell>
          ))}

        {/* Render Rows */}
        {gridData.length > 0 &&
          gridData.map((row, rowIndex) =>
            Object.values(row).map((value, colIndex) => (
              <GridCell key={`row-${rowIndex}-col-${colIndex}`}>
                {typeof value === 'object' ? JSON.stringify(value) : value}
              </GridCell>
            )),
          )}
      </MyGrid>
    </Column>
  )
}

export default memo(Grid)
