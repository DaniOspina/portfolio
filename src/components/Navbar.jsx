import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Navbar Wrapper
const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0); /* Semi-transparent background */
  color:rgb(190, 43, 117);
  z-index: 1000;
`;

// Brand Name (left side)
const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #e2e8f0;
  margin: 2%;
`;

// Hamburger Button (right side)
const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #e2e8f0;
  font-size: 2rem;
  cursor: pointer;
  margin: 2%;
  &:hover {
    color: #f1f5f9;
  }
`;

// Slide-in Animation for Menu
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Menu Wrapper
const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(14, 85, 199, 0.9); /* Semi-transparent background */
  color: #f1f5f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 999;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : null)} 0.5s ease-out;
  transition: transform 0.5s ease-out;

  @media (min-width: 768px) {
    width: 40%; /* 40% width for tablet and larger screens */
  }
`;

// Menu Item
const MenuItem = styled.li`
  list-style: none;
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    color: #94a3b8;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block; /* Keeps it aligned like a block-level element */
  width: 100%; /* Ensures it stretches inside flexbox containers if needed */
`;



// Close Button
// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: none;
//   border: none;
//   color: #f1f5f9;
//   font-size: 2rem;
//   cursor: pointer;

//   &:hover {
//     color: #94a3b8;
//   }
// `;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <NavbarWrapper>
        <BrandName>DANI OSPINA</BrandName>
        <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
      </NavbarWrapper>

      {/* Menu */}
      <Menu isOpen={isMenuOpen}>
        {/* <CloseButton onClick={closeMenu}>&times;</CloseButton> */}
        <ul>
          <MenuItem><StyledLink  href="#about" onClick={closeMenu}>ABOUT</StyledLink>
          </MenuItem>
          <MenuItem><StyledLink  href="#work" onClick={closeMenu}>EXPERIENCE</StyledLink></MenuItem>
          <MenuItem><StyledLink  href="#projects" onClick={closeMenu}>PROJECTS</StyledLink></MenuItem>
          <MenuItem><StyledLink  href="#contact" onClick={closeMenu}>CONTACT</StyledLink></MenuItem>
        </ul>
      </Menu>
    </>
  );
};

export default Navbar;
