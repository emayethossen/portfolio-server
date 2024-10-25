// src/controllers/skills.controller.ts
import { Request, Response } from 'express';
import Skill from './skills.model';

// Get all skills
export const getSkills = async (req: Request, res: Response) => {
    try {
        const skills = await Skill.find();
        res.status(200).json({ success: true, skills });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get a single skill by ID
export const getSkillById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const skill = await Skill.findById(id);
        if (!skill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.status(200).json({ success: true, skill });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Create a new skill
export const createSkill = async (req: Request, res: Response) => {
    const { name, proficiency, category, imageUrl } = req.body;
    try {
        const newSkill = new Skill({ name, proficiency, category, imageUrl });
        await newSkill.save();
        res.status(201).json({ success: true, skill: newSkill });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Update a skill by ID
export const updateSkill = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedSkill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.status(200).json({ success: true, skill: updatedSkill });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Delete a skill by ID
export const deleteSkill = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.status(200).json({ success: true, message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
