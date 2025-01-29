import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const HeaderAndNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const Header = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0 0;
  }

  @media (min-width: 1024px) {
    text-align: center;
    h1{
    text-align: left;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row; /* Change to row for laptop and above */
    gap: 2rem; /* Add space between nav items */
  }
`;


const NavItem = styled.li`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: center;
  }
`;

const SocialAndFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;

  a {
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin: 0;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <HeaderAndNavContainer>
        <Header>
          <h1>Daniela Ospina</h1>
          <h2>Front End Developer & Designer</h2>
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
            <a href="#contact">CONTACT</a>
          </NavItem>
        </NavList>
      </HeaderAndNavContainer>
      <SocialAndFooterContainer>
        <SocialIcons>
          <a href="https://github.com/DaniOspina" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daniela-ospina-sarmiento-developer/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="/CV-Daniela-OspinaS.pdf" download aria-label="Download CV">
            <FaFileDownload />
          </a>
        </SocialIcons>
        <FooterText>© 2025 Daniela Ospina Sarmiento. All Rights Reserved.</FooterText>
      </SocialAndFooterContainer>
    </FooterContainer>
  );
};

export default Footer;