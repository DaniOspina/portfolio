// src/components/AboutSection/AboutSection.jsx
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 50px;
  background-color: #1f1f1f;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const AboutSection = () => (
  <AboutContainer id="about">
    <Title>About Me</Title>
    <Description>
      I’m a developer passionate about crafting accessible, pixel-perfect user
      interfaces that blend thoughtful design with robust engineering.
    </Description>
  </AboutContainer>
);

export default AboutSection;
