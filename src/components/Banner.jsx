import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #1f1f1f;
  color: #e2e8f0;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  padding: 0%;
  animation: ${fadeIn} 1s ease-out;
  color: #f1f5f9;
line-height: 5rem;

  @media (min-width: 768px) {
    font-size: 10rem;
    line-height: 8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #cbd5e1;
  animation: ${fadeIn} 1.5s ease-out;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  animation: ${fadeIn} 2s ease-out;
`;

const IconLink = styled.a`
  font-size: 2rem;
  color:rgba(110, 159, 240, 0.53);
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

const Banner = () => {
  return (
    <BannerSection id="about">
      <Title>DANIELA OSPINA SARMIENTO</Title>
      <Subtitle>Web Designer & Developer</Subtitle>
      <IconsContainer>
        <IconLink href="https://www.linkedin.com/in/daniela-ospina-sarmiento-developer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/DaniOspina" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="/CV-Daniela-OspinaS.pdf" download>
          <FaFileDownload />
        </IconLink>
      </IconsContainer>
    </BannerSection>
  );
};

export default Banner;
