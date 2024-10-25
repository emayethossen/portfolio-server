import { Request, Response } from 'express';
import Project from './projects.model';
import { IProject } from './projects.interface';
import { projectValidationSchema } from './projects.validation';

// Create a new project
export const createProject = async (req: Request, res: Response) => {
  try {
    const validatedData: IProject = projectValidationSchema.parse(req.body);
    const project = await Project.create(validatedData);
    res.status(201).json({ success: true, message: 'Project created successfully', project });
  } catch (error: unknown) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const validatedData: IProject = projectValidationSchema.parse(req.body);
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, validatedData, { new: true });
    if (!updatedProject) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, message: 'Project updated successfully', updatedProject });
  } catch (error: unknown) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, message: "Projects retrieved successfully", projects });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, message: "Project retrieved successfully", project });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error.message });
  }
};
