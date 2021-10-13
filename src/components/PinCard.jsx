import React from 'react';
const PinCard = (props) => {
  return (
    <div onMouseOver={pinOver} onMouseLeave={pinLeave}
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      <img src={props.image} alt="no carga pai" style={{ ..._stylesImage.image }} />
      <div style={{..._stylesPinCard.contenedorBotones}}>
        <div style={{ ..._stylesButton.btn }}>
          usuario
        </div>
        <div style={{ ..._stylesButton.btn }}>
          texto
        </div>
      </div>
    </div>
  );
};
function pinOver(e) {
  e.target.style.opacity = '65%';
};
function pinLeave(e) {
  e.target.style.opacity = '1';
};
const _stylesPinCard = {
  pin_card: {
    margin: '10px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'white',
  },
  small: {
    gridRowEnd: 'span 18',
  },
  medium: {
    gridRowEnd: 'span 27',
  },
  largue: {
    gridRowEnd: 'span 39'
  },
  extralarge: {
    gridRowEnd: 'span 45',
  },
  contenedorBotones:{
    display:'flex',
    height:'max-content',
    width:'100%',
  }


};
const _stylesButton = {
  btn: {
    margin: 0,
    padding: 0,
    width: '50%',
    height: '40px',
    color: 'black',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    fontFamily: 'Franklin Gothic heavy',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'white',
  }
}
const _stylesImage = {
  image: {
    padding: 0,
    borderRadius: '16px',
    height: '70%',
    width: '100%',
    opacity: '1',
  },
};

export default PinCard;
