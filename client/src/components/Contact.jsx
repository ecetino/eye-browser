import React from 'react';
import mapEye from '../images/mapEye.png'

const contact = (props) => {
  return (
    <div style={contactContainer}>
      <div style={contactTextContainer}>
        <div style={contactTextTitle}>Contact</div>
        <p style={contactTextParagraph}>
          If you happen to come accross any bugs or have any ideas for features you would like added, please feel free to contact me at my email or LinkedIn to chat.
        </p>
        <div style={contactLinks}>
          <a href="https://www.linkedin.com/in/ecetino/" target="_blank" style={{ marginRight: '1vw'}}>
            <img src="https://img.shields.io/badge/-Edgar%20Cetino-blue?style=for-the-badge&logo=Linkedin&logoColor=white" />
          </a>
          <a href="mailto:cetino-e@hotmail.com">
            <img src="https://img.shields.io/badge/EMAIL-cetino--e%40hotmail.com-1152ba?style=for-the-badge" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default contact;

const contactContainer = {
  backgroundColor: '#fff',
  width: '60vw',
  height: '70vh',
  borderRadius: '4px',
  color: '#000',
  padding: '1vw'
}
const contactTextContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '20px'
}
const contactTextTitle = {
  fontSize: 'clamp(10px, 1.5vw + 2.5vh, 3vw)',
  marginBottom: '1vh',
  fontWeight: '300',
  borderBottom: 'solid #245478 1px',
}
const contactTextParagraph = {
  fontSize: 'clamp(1vh, 4vw, 1.5vw)',
  marginBottom: '1vh',
  fontWeight: '300'
}
const contactLinks = {
  display: 'flex',
  marginTop: '1vh',
  width: '20vw'
}