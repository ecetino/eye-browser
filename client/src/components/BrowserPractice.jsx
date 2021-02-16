import React, { useState, useEffect } from 'react';
import back from '../images/back.png';
import shades from '../images/shades.png'
import { Carousel, Dropdown, Button, ButtonGroup, Breadcrumb } from 'react-bootstrap';
import Keyboard from './Keyboard';
import H4HModal from './H4HModal';
import AddToCartModal from './AddToCartModal';

const browserPractice = (props) => {
  const [modalShowH4H, setModaShowH4H] = React.useState(false);
  const [modalShowAddCart, setModalShowAddCart] = React.useState(false);

  function toggleModalShowAddCart() {
    setModalShowAddCart(!modalShowAddCart);
  }

  function toggleModalShowH4H() {
    setModaShowH4H(!modalShowH4H);
  }

  return (
    <div style={browserPracticeContainer}>
      <div>
        <button style={backButtonStyle} onClick={() => { props.setModule('selection') }}><img style={backImgStyle} src={back} /></button>
      </div>
      <div style={webpageContainer}>
        <div style={webpageHeading}>
          Try Interacting with the Webpage
          </div>
        <div style={webpageStyle}>
          <div className='h3' style={logoStyle}>
            L <img src={shades} style={logoImgStyle} /> KING SHADY
              <br />
            <div className='h6 text-muted'>America's #1 Sunglasses Store</div>
          </div>
          <div className='h5 text-dark' style={headerStyle}>
            Home Locations FAQ
              <div className='d-inline ' style={{ wordSpacing: '0px', marginLeft: '30px' }}>
              Contact Us
              </div>
          </div>
          <div style={breakingStyle}></div>
          <div style={breadcrumbStyle} className='h6 text-dark'>
            Home / Ray Ban / <b>Aviators</b>
          </div>
          <Carousel style={carouselStyle}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.lenscrafters.com/is/image/LensCrafters/805289602057_shad_fr.png?"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.lenscrafters.com/is/image/LensCrafters/805289602057_shad_qt.png?"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.lenscrafters.com/is/image/LensCrafters/805289602057_090A.png?"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div style={productInfo}>
            <h2><b>Ray Ban Aviators</b></h2>
            <div className='h4 text-muted'>From $299</div>
            <br />
            <div className='h5'>Available in Sizes: S, M, L</div>
            <Dropdown size='sm' as={ButtonGroup} style={selectSizesStyle}>
              <Button variant="info">Select Size</Button>
              <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item >Small</Dropdown.Item>
                <Dropdown.Item >Medium</Dropdown.Item>
                <Dropdown.Item >Large</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown size='sm' as={ButtonGroup} style={addToListStyle}>
              <Button variant="danger">Add to List</Button>
              <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item >Trendy</Dropdown.Item>
                <Dropdown.Item >Casual</Dropdown.Item>
                <Dropdown.Item >Sporty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button style={purchaseStyle} type='button' onClick={toggleModalShowAddCart} className='btn btn-warning d-block'>Add to Cart</button>
            <div style={productDetailsStyle}>
              <b>Product Details</b>
              <dl className='mb-0  row'>
                <dd className='col-sm-6'>Frame Material</dd>
                <dd className='col-sm'>Metal</dd>
              </dl>
              <dl className='mb-0 row'>
                <dd className='col-sm-6'>Pupillary Range</dd>
                <dd className='col-sm'>54-74</dd>
              </dl>
              <dl className='mb-0 row'>
                <dd className='col-sm-6'>Frame Style</dd>
                <dd className='col-sm'>Pilot</dd>
              </dl>
            </div>
            <div>
              <b>Shipping Information</b>
              <dl className='mb-1  row'>
                <dd className='col-sm-12'>Free 2 day shipping on orders over $99<br /></dd>
              </dl>
            </div>
            <div>
              <b>Shades for Humanity</b>
              <dl className='mb-1  row'>
                <dd className='col-sm-12'>Round up at checkout to donate towards<br /> Habitat for Humanity<br /><div className='text-info'><u onClick={toggleModalShowH4H} >Click here to learn more</u></div></dd>
              </dl>
            </div>
          </div>
          <div style={descriptionStyle}>
            <b>About the Frame</b>
            <p>
              Originally created for U.S. pilots in 1937, the Ray-Ban Classic Aviator is one of the most recognizable styles ever. These original pilot sunglasses in gold with green polarized lenses have exceptional performance and coverage. Crafted from metal, these frames are flexible yet strong.
              </p>
            <img
              src="https://assets.lenscrafters.com/is/image/LensCrafters/805289602057_shad_qt.png?"
              style={descriptionImgStyle}
            />
          </div>
        </div>
        <H4HModal show={modalShowH4H} onHide={toggleModalShowH4H}></H4HModal>
        <AddToCartModal show={modalShowAddCart} onHide={toggleModalShowAddCart}></AddToCartModal>
      </div>
    </div>
  )
}

export default browserPractice;

const webpageContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}
const browserPracticeContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 9fr',
  height: '95vh',
  width: '100vw'
}
const descriptionImgStyle = {
  marginTop: '2px',
  width: '400px',
  position: 'absolute',
  left: '50px',
  top: '100px'
}
const productDetailsStyle = {
  marginTop: '20px'
}
const descriptionStyle = {
  color: 'black',
  position: 'absolute',
  top: '400px',
  width: '55%',
  textAlign: 'justify',
  left: '20px'
}
const purchaseStyle = {
  marginTop: '15px',
  width: '270px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
const selectSizesStyle = {
  width: '130px'
}
const addToListStyle = {
  width: '130px',
  marginLeft: '10px',
}
const productInfo = {
  top: '135px',
  color: 'black',
  position: 'absolute',
  right: '80px',
  textAlign: 'left'
}
const carouselStyle = {
  backgroundColor: '#dee2e6',
  width: '55%',
  top: '135px',
  left: '20px',
  position: 'absolute'
}
const breakingStyle = {
  borderStyle: 'solid',
  borderColor: 'black',
  position: 'absolute',
  top: '100px',
  width: '100%',
  left: '0px',
  borderWidth: '1px'
}
const breadcrumbStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  top: '110px',
  left: '20px'
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
  width: '80%',
  height: '700px',
  backgroundColor: 'white',
  position: 'relative',
  minWidth: '900px',
  maxWidth: '920px',
}
const webpageHeading = {
  fontSize: '40px',
  marginBottom: '2vh'
}
const backButtonStyle = {
  padding: '1vw',
  margin: '1vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9'
}
const backImgStyle = {
  width: 'clamp(1vw, 2vw + 3vh, 6vw)',
  height: 'clamp(1vw, 1.5vw + 3vh, 6vw)'
}
