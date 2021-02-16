import React from 'react';
import mapEye from '../images/mapEye.png'

const home = (props) => {
  return (
    <div style={homeContainer}>
      <div style={textContainer}>
        <div style={textTitle}>Eye Browser</div>
        <p style={textParagraph}>
          Eye Browser is a training application designed to accustom users to using eye tracking for cursor movement. To achieve this, Eye Browser provides three training modules aimed to provide a unique practice oppurtunity. These include keyboard practice to practice typing with a virtual keyboard, target practice aimed to train precise cursor movement, and browser practice to practice cursor movement with a more familar web interface.
        </p>
        <button style={textButton} onClick={() => { props.setTab('practice')}}>Start Practicing</button>
      </div>
      <div>
        <img style={imgStyle} src={mapEye} />
      </div>
    </div>
  )
}

export default home;

const homeContainer = {
  backgroundColor: '#fff',
  width: '60vw',
  height: '70vh',
  borderRadius: '4px',
  display: 'grid',
  gridTemplateColumns: '3fr 1fr',
  color: '#000',
  padding: '2vh',
  fontWeight: '300'
}
const textContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '20px'
}
const textTitle = {
  fontSize: 'clamp(10px, 1.5vw + 2.5vh, 3vw)',
  marginBottom: '1vh',
  fontWeight: '300',
  borderBottom: 'solid #245478 1px',
}
const textParagraph = {
  fontSize: 'clamp(1vh, 0.75vw + 1.5vh, 1.5vw)',
  marginBottom: '1vh',
}
const textButton = {
  width: '17vw',
  alignSelf: 'center',
  padding: 'clamp(0.5vw, 0.5vw + 0.5vh, 1vw)',
  fontSize: 'clamp(1vh, 1vw + 1.5vh, 50px)',
  marginTop: 'clamp(2vh, 3vw + 4vh, 6vh)',
  color: '#fff',
  backgroundColor: '#E2474B',
  borderRadius: '4px',
  fontWeight: '300'
}
const imgStyle = {
  height: '66vh',
  width: '15vw',
  borderRadius: '4px'
}
