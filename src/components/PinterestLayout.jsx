import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image = 'https://picsum.photos//300/450' />
      <PinCard size='medium' image= 'https://picsum.photos//300/623' />
      <PinCard size='large' image = 'https://picsum.photos//300/350'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/450'/>
      <PinCard size='small' image = 'https://picsum.photos//300/477'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/552'/>
      <PinCard size='large' image = 'https://picsum.photos//300/333'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/222'/>
      <PinCard size='small' image = 'https://picsum.photos//300/232'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/110'/>
      <PinCard size='large' image = 'https://picsum.photos//300/666'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/987'/>
      <PinCard size='small' image = 'https://picsum.photos//300/234'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/111'/>
      <PinCard size='large' image = 'https://picsum.photos//300/441'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/323'/>
      <PinCard size='small' image = 'https://picsum.photos//300/645'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/354'/>
      <PinCard size='large' image = 'https://picsum.photos//300/432'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/123'/>
      <PinCard size='small' image = 'https://picsum.photos//300/645'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/523'/>
      <PinCard size='large' image = 'https://picsum.photos//300/413'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/450'/>
      <PinCard size='small' image = 'https://picsum.photos//300/500'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/230'/>
      <PinCard size='large' image = 'https://picsum.photos//300/720'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/654'/>
      <PinCard size='small' image = 'https://picsum.photos//300/440'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/542'/>
      <PinCard size='large' image = 'https://picsum.photos//300/800'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/456'/>
      <PinCard size='small' image = 'https://picsum.photos//300/210'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/420'/>
      <PinCard size='large' image = 'https://picsum.photos//300/100'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/722'/>
      <PinCard size='small' image = 'https://picsum.photos//300/310'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/920'/>
      <PinCard size='large' image = 'https://picsum.photos//300/660'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/340'/>
      <PinCard size='small' image = 'https://picsum.photos//300/770'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/777'/>
      <PinCard size='large' image = 'https://picsum.photos//300/666'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/285'/>
      <PinCard size='small' image = 'https://picsum.photos//300/513'/>
      <PinCard size='medium' image = 'https://picsum.photos//300/420'/>
      <PinCard size='large' image = 'https://picsum.photos//300/100'/>
      <PinCard size='extralarge' image = 'https://picsum.photos//300/466'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '100vw',
    top:'75px',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
    
  },
};

export default PinterestLayout;
