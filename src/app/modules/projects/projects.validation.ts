import { z } from 'zod';

export const projectValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().optional(),
  image: z.string().optional(),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  githubFrontendLink: z.string().url().optional(), // Validate as a URL
  githubBackendLink: z.string().url().optional(),  // Validate as a URL
});
