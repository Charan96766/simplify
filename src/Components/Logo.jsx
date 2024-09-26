import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="diamond-container">
        <div className="border top"></div> 
        <div className="border right"></div>
        <div className="border bottom"></div>
         <div className="border left"></div> 
        
          </div> 
      <div className="logo-text">
        <h1>HTML <span className='spanLogo'>&</span> CSS</h1>
        <p>design and build websites</p>
          </div> 
          <div className='firstSmallContainer'></div> 
          <div className='secondSmallContainer'></div> 
          <div className='thirdSmallContainer'></div> 
          <div className='fourthSmallContainer'></div>
    </div>
  );
};

export default Logo;
