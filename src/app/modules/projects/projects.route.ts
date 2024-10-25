
import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from './projects.controller';

const router = express.Router();

// Route for creating a project
router.post('/projects', createProject);

// Route for getting all projects
router.get('/projects', getAllProjects);

// Route for getting a specific project by ID
router.get('/projects/:id', getProjectById);

// Route for updating a project
router.put('/projects/:id', updateProject);

// Route for deleting a project
router.delete('/projects/:id', deleteProject);

export default router;
