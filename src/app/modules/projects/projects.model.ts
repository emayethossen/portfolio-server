
import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  image: { type: String },
  technologies: { type: [String], required: true },
  githubFrontendLink: { type: String },
  githubBackendLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Project = model('Project', projectSchema);
export default Project;
