// Projects.jsx
import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.section`
  padding: 4rem 16rem;
  background-color: #1f1f1f;
  color: #e2e8f0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #f1f5f9;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const BentoItem = styled.div`
  background-color: #334155;
  border-radius: 8px;
  padding: 1rem;
  color: #e2e8f0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;

  &.small {
    grid-column: span 1;
    grid-row: span 1;
  }

  &.medium {
    grid-column: span 2;
    grid-row: span 2;
  }

  &.large {
    grid-column: span 3;
    grid-row: span 3;
  }
`;

const BentosSection = () => {
  return (
    <ProjectsWrapper>
      <SectionTitle></SectionTitle>
      <BentoGrid>
        <BentoItem className="small">Small 1</BentoItem>
        <BentoItem className="medium">Medium 1</BentoItem>
        <BentoItem className="large">Large 1</BentoItem>
        <BentoItem className="small">Small 2</BentoItem>
        <BentoItem className="medium">Medium 2</BentoItem>
        <BentoItem className="small">Small 3</BentoItem>
        <BentoItem className="large">Large 2</BentoItem>
      </BentoGrid>
    </ProjectsWrapper>
  );
};

export default BentosSection;
