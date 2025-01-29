import React from 'react';
import { ProjectCard } from './ProjectCard.jsx';
import styled from 'styled-components';

export const SectionProjects = styled.div`
background-color: #1f1f1f;
padding-bottom: 5%;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 8rem;
  color:rgb(55, 89, 190);
  font-weight: bold;
  text-transform: uppercase;
  padding: 6%;
    @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // Tres columnas por defecto
  gap: 20px;
  padding: 20px;
  margin: 0 4rem;
  
  // Responsive para tablet y mobile
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);  // Dos columnas en tablet
    margin: 0 2%;
  } 
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Una columna en mobile
  }
`;

export const Title = styled.h1`
  font-size: 10rem;
  margin-bottom: 20px;

`;
// Datos de ejemplo para proyectos (asegurando que no esté vacío)
const exampleProjects = [
  {
    title: 'Tesoros de mi tierra',
    categories: ['ECOMMERCE', 'JAVASCRIPT'],
    description: 'Ecommerce of Colombian products.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/JiselaGeneration/Proyecto-8/tree/main',
  },
  {
    title: 'Real time Chat',
    categories: ['NODEJS', 'REACTJS', 'EXPRESS'],
    description: 'Real time chat frontend and backend. Socket, JWT.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/Javieredoher/Intopcol_React_Front',
  },
  {
    title: 'Videogames',
    categories: ['ANGULAR', 'TYPESCRIPT', 'API'],
    description: 'Website that consumes videogames API and search.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/DaniOspina/PlataformaEdu',
  },
  {
    title: 'Music store',
    categories: ['JSCRIPT', 'TAILWIND', 'HTML'],
    description: 'Website music and animations in css and JS.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/DaniOspina/Music-website',
  },
  {
    title: '50 challenges',
    categories: ['REACT', 'JAVASCRIPT', 'HTML'],
    description: '50 animations in React with CSS and JS.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/DaniOspina/50jsChallenges',
    // linkUrl: 'https://50jschallenges.netlify.app/',
  },
  {
    title: 'Portolio',
    categories: ['REACT', 'BOOTSTRAP', 'JS'],
    description: 'Previous version of personal portfolio.',
    imageUrl: 'https://cdn.prod.website-files.com/65074ffe02173fb4a39f8dc0/66c33b9199dd0937ccdd5dcf_Multipolitan_EX%20front.png',
    linkUrl: 'https://github.com/DaniOspina/personal-portfolio/',
  },
  // Agregar más proyectos aquí.
];

const Projects = ({ projects = exampleProjects }) => {
  return (
    <SectionProjects id="projects">
      {/* Título de la sección usando styled-component */}
      <SectionTitle>
        Projects
      </SectionTitle>

      {/* Contenedor de proyectos */}
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            categories={project.categories}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.linkUrl}
          />
        ))}
      </ProjectsContainer>
    </SectionProjects>
  );
};

export default Projects;
