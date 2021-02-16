import React from 'react';

const keyboardLeaderboard = (props) => {
  return (
    <table style={keyTableStyle} cellPadding='6'>
      <thead>
        <tr>
          <td style={{ ...keyTableHeading, borderRadius: '4px 0px 0px 0px' }}>Rank</td>
          <td style={{ ...keyTableHeading, borderRadius: '0px' }}>Username</td>
          <td style={{ ...keyTableHeading, borderRadius: '0px 4px 0px 0px' }}>Streak</td>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((entry, rank) => {
          return (
            <tr key={entry._key}>
              <td>{rank + 1}</td>
              <td>{entry.users}</td>
              <td>{entry.streak}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const keyTableStyle = {
  backgroundColor: 'white',
  color: '#444444',
  textAlign: 'center',
  width: '10vw',
  fontSize: 'clamp(1vw, 1.3vw, 4vw)',
  fontFamily: 'Roboto',
  fontWeight: '300',
  borderRadius: '4px'
}
const keyTableHeading = {
  fontFamily: 'Roboto',
  fontWeight: '400',
  color: '#000',
  backgroundColor: '#C8E1F9',
  padding: '0.5vw'
}

export default keyboardLeaderboard;