// src/components/intro.js
import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const startAnimationTimeout = setTimeout(() => {
      setOpacity(0);
      setScale(0);
      console.log('Opacity and Scale set to 0 after 2s');
    }, 2000);

    const unmountTimeout = setTimeout(() => {
      setIsVisible(false);
      console.log('isVisible set to false after 3s');
    }, 3000);

    return () => {
      clearTimeout(startAnimationTimeout);
      clearTimeout(unmountTimeout);
    };
  }, []);

  console.log('isVisible on render:', isVisible);

  const introStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    opacity: opacity,
    transition: 'opacity 1s ease-out 2s',
  };

  const logoStyles = {
    width: '40px',
    height: 'auto',
    transform: `scale(${scale})`,
    transition: 'transform 1s ease-out 2s',
  };

  const sceneStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '200px',
  };

  return (
    isVisible && (
      <div style={introStyles}>
        <div style={sceneStyles}>
          <img
            src="/logo.svg"
            alt="Logo"
            style={logoStyles}
          />
        </div>
      </div>
    )
  );
};

export default Intro;