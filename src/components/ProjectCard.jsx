import React from 'react';
import { Card, CategoryList, CategoryLink, CardLink, ArrowIcon, CardContent } from './Projects.styles.jsx';

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
