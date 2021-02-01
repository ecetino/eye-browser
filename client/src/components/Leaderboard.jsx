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
        {props.tableData.map((entry, rank) => {
          return(
            <tr key={entry.key}>
              <th scope='row'>{rank +1 }</th>
              <td>{entry.users}</td>
              {props.time && <td>{(Math.round(entry.time * 100) / 100).toFixed(2)}</td>}
              {props.tasksCompleted && <td>{entry.tasksCompleted}</td>}
              {props.streak && <td>{entry.streak}</td>}
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

export default leaderboard;