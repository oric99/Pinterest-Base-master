import React from 'react';

const ButtonHeader = () => {
  return (
    <div>
      <button onMouseOver={hover_button1Over}
        onMouseLeave={hover_button1Leave}
        style={{ ..._stylesButton._button1 }}>Inicio
      </button>
      <button onMouseOver={hover_button2Over}
        onMouseLeave={hover_button2Leave}
        style={{ ..._stylesButton._button2 }}>Hoy
      </button>
    </div>

  );
};

function hover_button1Over(e) {
  e.target.style.backgroundColor = 'white';
  e.target.style.color = 'black';
};
function hover_button1Leave(e) {
  e.target.style.backgroundColor = 'black';
  e.target.style.color = 'white';
};

function hover_button2Over(e) {
  e.target.style.backgroundColor ='rgb(236, 236, 236)';
};
function hover_button2Leave(e) {
  e.target.style.backgroundColor = 'white';
};


const _stylesButton = {
  _button1: {
    margin: 0,
    padding: 0,
    width: '70px',
    height: '47px',
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Franklin Gothic heavy',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'black',
  },
  _button2:{
    margin: 0,
    padding: 0,
    width: '60px',
    height: '47px',
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Franklin Gothic heavy',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'white',
  }
};
export default ButtonHeader;