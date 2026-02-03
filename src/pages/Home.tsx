import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  background: white;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url('${process.env.PUBLIC_URL}/landing.png');
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  z-index: 1;
`;



const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100%;
  max-width: 700px;
  padding: 2rem;

  @media (min-width: 1400px) {
    max-width: 800px;
  }

  h1 {
    font-family: 'Muocas Display Serif', serif;
    font-size: 4rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  h2 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 2rem;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: 'Dancing Script', cursive;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem;
    padding: 1.5rem;
    
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(5px);

  &:hover {
    background: #2D1A33;
    color: white;
    border-color: #2D1A33;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 26, 51, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
`;

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Très Petite LLC';
  }, []);

  return (
    <MainContainer>
      <BackgroundImage />
      <HeroContent>
        <h1>Très Petite</h1>
        <h2>Where gatherings become unforgettable - book us for your next event!</h2>
        <CTAButton to="/services">
          Our Services
        </CTAButton>
      </HeroContent>
    </MainContainer>
  );
};