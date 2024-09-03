// X.jsx
import React from 'react';
import blackholeImg from './logo.png'; // Path to your image file

const XSvg = (props) => (
  <img
    src={blackholeImg}
    alt="Blackhole"
    {...props}
    // style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
  />
);

export default XSvg;
