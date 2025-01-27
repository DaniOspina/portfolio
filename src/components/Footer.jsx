// src/components/Footer/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0f172a; /* Fondo oscuro */
  color:rgb(227, 231, 238);
  padding: 50px;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color:rgba(207, 228, 238, 0.74); /* Azul claro */
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
    color: #94a3b8; /* Gris claro */
  }
`;

const NavList = styled.ul`
  display: none; /* Oculta la lista en mobile */

  @media (min-width: 1024px) {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
  }
`;

const NavItem = styled.li`
  margin: 1rem 0;
  font-size: 1.2rem; /* Aumenta tamaño de fuente */

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color:rgba(56, 191, 248, 0.64);
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;


const CVButton = styled.a`
  display: block;
  margin: 2rem 0;
  padding: 1rem 2rem;
  
  text-align: center;
  font-size: 1.5rem; /* Aumenta tamaño del botón */
  font-weight: bold;
  color: white;
  background-color:rgb(85, 110, 121);
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;


  &:hover {
    background-color:rgb(126, 149, 161); /* Azul más oscuro */
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinea los íconos a la izquierda */
  margin-top: 3rem;

  a {
    color: white;
    font-size: 2rem; /* Aumenta tamaño de los iconos */
    margin-right: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #38bdf8;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Header>
        <h1>Daniela Ospina</h1>
        <h2>Front End Developer & Designer</h2>
        {/* <p>I build accessible digital experiences for the web.</p> */}
      </Header>
      <NavList>
        <NavItem>
          <a href="#about">ABOUT</a>
        </NavItem>
        <NavItem>
          <a href="#experience">EXPERIENCE</a>
        </NavItem>
        <NavItem>
          <a href="#projects">PROJECTS</a>
        </NavItem>
        <NavItem>
          <a href="#projects">CONTACT</a>
        </NavItem>
      </NavList>
      <CVButton href="/path-to-cv.pdf" target="_blank">
        Download CV
      </CVButton>
      <SocialIcons>
        <a href="https://github.com/DaniOspina" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/daniela-ospina-sarmiento-developer/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer" aria-label="Behance">
          <FaBehance />
        </a>
      </SocialIcons>
      <p>© 2025 Daniela Ospina. All Rights Reserved.</p>
      </FooterContainer>

  );
};

export default Footer;
