import express, { Application, Request, Response } from "express";
import cors from "cors";
import projectRoutes from './app/modules/projects/projects.route';
import skillRoutes from './app/modules/skills/skills.route';
import blogRoutes from './app/modules/blog/blog.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api', projectRoutes);
app.use('/api', skillRoutes);
app.use('/api', blogRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
