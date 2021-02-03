import React from 'react';

const targetLeaderboard =(props) => {
  return (
    <table style={tableStyle} className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Username</th>
          <th scope="col">{props.measure}</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((entry, rank) => {
          return(
            <tr key={entry._key}>
              <th scope='row'>{rank + 1}</th>
              <td>{entry.users}</td>
              <td>{(Math.round(entry.time * 100) / 100).toFixed(1)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const tableStyle = {
  backgroundColor: 'silver',
  position: 'relative',
  top: '150px',
  color:'black',
  border: 'solid black 3px',
  borderStyle: 'outset',
  width: '250px',
  textAlign: 'center',
  right: '10%',
  marginLeft: '47px'
}

export default targetLeaderboard;