import React from 'react';

const Map = () => {
  const iframeStyle = {
    border: 0,
    width: '100%',
    height: '220px'
  };

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.700985610939!2d24.570959476304555!3d54.220781408938734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46de052395c4e5b9%3A0xf1a2d88686f81cef!2s%C5%BDalioji%20g.%2026%2C%20Var%C4%97na%2C%2065218%20Var%C4%97nos%20r.%20sav.!5e0!3m2!1sen!2slt!4v1718397606570!5m2!1sen!2slt"
      style={iframeStyle}
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
};

export default Map;

  




