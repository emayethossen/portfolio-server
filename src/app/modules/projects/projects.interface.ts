export interface IProject {
  title: string;
  description: string;
  link?: string;
  image?: string;
  technologies: string[];
  createdAt?: Date;
  githubFrontendLink?: string; 
  githubBackendLink?: string;  
}
