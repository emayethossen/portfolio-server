// src/routes/skills.routes.ts
import { Router } from 'express';
import {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill,
} from './skills.controller';

const router = Router();

// Route to get all skills
router.get('/skills', getSkills);

// Route to get a skill by ID
router.get('/skills/:id', getSkillById);

// Route to create a new skill
router.post('/skills', createSkill);

// Route to update a skill by ID
router.put('/skills/:id', updateSkill);

// Route to delete a skill by ID
router.delete('/skills/:id', deleteSkill);

export default router;
