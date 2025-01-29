import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: #333;  // Fondo por defecto
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 350px;
  padding: 20px;
  
  &:hover {
/* Asignando un fondo diferente usando nth-child */
  &:nth-child(1) {
    background-color:rgba(255, 88, 51, 0.66);
  }
  &:nth-child(2) {
    background-color:rgba(51, 255, 88, 0.75);
  }
  &:nth-child(3) {
    background-color:rgba(51, 88, 255, 0.6);
  }
  &:nth-child(4) {
    background-color:rgba(255, 196, 0, 0.54);
  }
  &:nth-child(5) {
    background-color:rgba(219, 247, 166, 0.42);
  }
  &:nth-child(6) {
    background-color:rgba(255, 51, 160, 0.37);
  }    transform: scale(1.05);
  }
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  z-index: 2;
`;

export const CategoryLink = styled.a`
  color: #f2f2ed;
  text-decoration: none;
  padding: 8px 12px;
  background-color: #333;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export const CardLink = styled.a`
  display: block;
  color: rgb(242, 242, 237);
  text-decoration: none;
  position: relative;
  height: 100%;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const CardContent = styled.div`
  padding: 15px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  color: white;
  z-index: 2;
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  h2 {
    font-size: 3rem;
    margin: 0;
    transition: font-size 0.3s ease;  // Transición para aumentar el tamaño del texto
  }

  .description {
    font-size: 2rem;
    margin-top: 10px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  ${Card}:hover & {
    transform: translateY(-10px);  // Desplaza el contenido hacia arriba al hacer hover
    opacity: 1;
    
    h2 {
      font-size: 2rem;  // Aumenta el tamaño del título
    }

    .description {
      opacity: 1;
      transform: translateY(0);  // Desplaza la descripción hacia su lugar
    }
  }
`;


export const ProjectCard = ({ title, categories, description, linkUrl }) => {
  return (
    <Card >
      <CardLink href={linkUrl}>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryLink key={index} href={`/categories/${category.toLowerCase()}`}>
            {category}
          </CategoryLink>
        ))}
      </CategoryList>
        <CardContent>
          <h2>{title}</h2>
          <div className="description">{description}</div>
        </CardContent>
        <ArrowIcon src="https://cdn.prod.website-files.com/64fb32c6628acf6135de5296/653434b7a0131b07182381a1_Arrow_black.svg" alt="Arrow" />

      </CardLink>
    </Card>
  );
};
