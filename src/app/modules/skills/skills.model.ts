
import { Schema, model } from 'mongoose';

// Mongoose schema for Skills
const skillSchema = new Schema({
  name: { type: String, required: true },
  proficiency: { type: String, required: true }, // e.g., Beginner, Intermediate, Advanced
  category: { type: String }, // e.g., Frontend, Backend, Database
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String }  // New field for the image URL
});

const Skill = model('Skill', skillSchema);
export default Skill;
