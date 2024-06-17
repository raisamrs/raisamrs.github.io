import { ReactNode } from 'react';

export type ProjectImageType = {
  [key: string]: string;
};

export type ScrollIndicatorType = {
  children: ReactNode;
};

export type TechnologyType = {
  name: string;
  logo: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  technologies: TechnologyType[];
  github: string;
  deploy: string;
};

export type CardBodyType = {
  project: ProjectType;
};
