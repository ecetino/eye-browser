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
              <th scope='row' key={rank}>{rank +1 }</th>
              <td key={entry.users} >{entry.users}</td>
              {props.time && <td key={entry.time} >{(Math.round(entry.time * 100) / 100).toFixed(2)}</td>}
              {props.tasksCompleted && <td key={entry.tasksCompleted} >{entry.tasksCompleted}</td>}
              {props.streak && <td key={entry.streak} >{entry.streak}</td>}
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
  top: '100px',
  color:'black',
  border: 'solid black 3px',
  borderStyle: 'outset',
  width: '250px',
  textAlign: 'center',
  right: '30%',
  marginLeft: '35px'
}

export default leaderboard;