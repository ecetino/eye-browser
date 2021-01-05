import React from 'react';

const leaderboard =(props) => {
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
        {props.tableData.map((entry) => {
          return(
            <tr>
              <th scope='row'>{entry.rank}</th>
              <td>{entry.username}</td>
              <td>{entry.time}</td>
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
  right: '20%',
  color:'black',
  border: 'solid black 3px',
  borderStyle: 'outset'
}

export default leaderboard;