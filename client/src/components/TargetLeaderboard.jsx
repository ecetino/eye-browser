import React from 'react';

const targetLeaderboard = (props) => {
  return (
    <table style={tarTableStyle} cellPadding='8'>
      <thead>
        <tr>
          <td style={{ ...tarTableHeading, borderRadius: '4px 0px 0px 0px' }}>Rank</td>
          <td style={{ ...tarTableHeading, borderRadius: '0px' }}>Username</td>
          <td style={{ ...tarTableHeading, borderRadius: '0px 4px 0px 0px' }}>Time</td>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((entry, rank) => {
          return (
            <tr key={entry._key}>
              <td>{rank + 1}</td>
              <td>{entry.users}</td>
              <td>{(Math.round(entry.time * 100) / 100).toFixed(1)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const tarTableStyle = {
  backgroundColor: 'white',
  color: '#444444',
  textAlign: 'center',
  width: '10vw',
  fontSize: 'clamp(1vw, 1.3vw, 4vw)',
  fontFamily: 'Roboto',
  fontWeight: '300',
  borderRadius: '4px'
}
const tarTableHeading = {
  fontFamily: 'Roboto',
  fontWeight: '400',
  color: '#000',
  backgroundColor: '#C8E1F9',
  padding: '0.5vw'
}

export default targetLeaderboard;