import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Asegúrate de que este archivo CSS esté importado
import styled from 'styled-components';

// Contenedor principal
const ExperienceContainer = styled.div`
  padding: 50px 20px;
  background-color: #1f1f1f;
  color: #272822;
`;

// Contenedor de los elementos de la línea de tiempo
const ItemsContainer = styled.div`
  margin: 0 auto;
  color: rgb(39, 40, 34);
`;

// Título de la sección
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 8rem;
  margin-bottom: 40px;
  color:rgb(240, 117, 36);
  @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

const DateStyled = styled.span`
  font-size: 1.3rem;
  color: black;
  font-weight: bold;
  text-align: center;
  display: block;

  @media (min-width: 1024px) {
    /* Applies for laptops and larger screens */
  font-size: 2rem;
     color: rgba(255, 255, 255, 0.89); /* Default color for smaller screens */
  }
`;

function Experience() {
  return (
    <ExperienceContainer id="work">
      <ItemsContainer>
        <SectionTitle>WORK</SectionTitle>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(245, 245, 245)', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={<DateStyled>2021 - present</DateStyled>}
            iconStyle={{ background: 'rgb(240, 117, 36)', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px'}}>Desing UX/UI & Developer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>REMOTE</h4>
            <p style={{ fontSize: '18px'}}>
            Create, maintain and update content management systems (CMS) such as Webflow and WordPress, ensuring accurate content publication and implementing design changes on web pages & Desing UX/UI.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<DateStyled>2022 - 2024</DateStyled>}
            iconStyle={{ background: 'rgb(240, 117, 36)', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px'}} >FRONTEND DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '20px'}}>accenture</h4>
            <p style={{ fontSize: '18px'}}>
            As a front-end developer fulfill the implementation of new client requirements in Vue, React, Angular (HTML, SCSS, JavaScript, TypeScript, unit testing, Git, AzureDevops, Jira, Figma, SQL).
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<DateStyled>2021 - 2022</DateStyled>}
            iconStyle={{ background: 'rgb(240, 117, 36)', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px'}}>TECHNOLOGIST</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '20px'}}>PROXIMITY</h4>
            <p style={{ fontSize: '18px'}}>
            Automate marketing strategies using platforms like MASIV and Oracle Eloqua, optimizing workflows.
            Design in Figma and Adobe XD ensuring an attractive, responsive design aligned with marketing strategies.            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(245, 245, 245)', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={<DateStyled>2021 - present</DateStyled>}
            iconStyle={{ background: 'rgb(240, 117, 36)', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px'}}>Desing UX/UI & Developer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>REMOTE</h4>
            <p style={{ fontSize: '18px'}}>
            Create, maintain and update content management systems (CMS) such as Webflow and WordPress, ensuring accurate content publication and implementing design changes on web pages & Desing UX/UI.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </ItemsContainer>
    </ExperienceContainer>
  );
}

export default Experience;

