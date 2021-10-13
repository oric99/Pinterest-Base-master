import React from 'react';
import ButtonHeader from './ButtonHeader';
import SearchBar from './SearchBar';
import Logo from './LogoPinterest';
import IconosD from './IconosDerecha';

const HeaderLayout = () => {
  return (
    <div style={_stylesHeader.header_container}>
      <Logo/><ButtonHeader/><SearchBar/><IconosD/>
    </div>
  );
};
const _stylesHeader = {
  header_container: {
    margin: 0,
    padding: 0,
    left:'1%',
    right:'1%',
    width: '100wv',
    height:'80px',
    backgroundColor: 'white',
    position: 'fixed',
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  
};


export default HeaderLayout;
