import React from 'react';
import home from '../images/home.png';
import shades from '../images/shades.png'

class BrowserPractice extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div >
        <div>
          <button style={homeButtonStyle} type='button' className='btn btn-primary' onClick={() => { this.props.setPage('Home') }}><img style={homeImgStyle} src={home}/></button>
        </div>
        <div className='container-fluid text-center' style={webpageStyle}>
          <div className='h3' style={logoStyle}>L<img src={shades} style={logoImgStyle}/>KING SHADY
          <br/>
          <div className='h6 text-muted'>America's #1 Sunglasses Store</div> </div>
          <div className='h5 text-dark' style={headerStyle}>Home Locations FAQ <div className='d-inline ' style={{wordSpacing: '0px'}}>Contact Us</div>
          </div>
          <div style={breakingStyle}></div>
        </div>

      </div>
    )
  }
}

const breakingStyle = {
  border: 'solid',
  borderColor: 'black'
}
const headerStyle = {
  position: 'absolute',
  top: '45px',
  right: '35px',
  wordSpacing: '30px',
}
const logoStyle = {
  color: 'black',
  position: 'absolute',
  top: '30px',
  left: '35px'
}
const logoImgStyle = {
  width: '50px',
  paddingBottom: '10px'
}
const webpageStyle = {
  border: 'solid',
  borderColor: 'black',
  width: '60%',
  height: '700px',
  marginTop: '50px',
  backgroundColor: 'white',
  position: 'relative'
}
const homeButtonStyle = {
  textAlign: 'left',
  float: 'left',
  padding: '20px',
  fontSize: '40px',
  margin: '-40px 10px'
}
const homeImgStyle = {
  width: '70px',
  height: '70px'
}

export default BrowserPractice;