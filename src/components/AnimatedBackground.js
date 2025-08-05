import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  overflow: hidden;
`;

const particlesOptions = {
  particles: {
    number: { value: 60 },
    color: { value: "#fff" },
    size: { value: 3 },
    move: { speed: 0.5 },
    opacity: { value: 0.3 }
  }
};

const AnimatedBackground = () => (
  <Background>
    <Particles params={particlesOptions} style={{ position: 'absolute' }} />
  </Background>
);

export default AnimatedBackground;
