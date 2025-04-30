import express from 'express';
import { getProjects } from '../controller/projectController.js';

const projectRouter = express.Router();

projectRouter.get('/',getProjects);

export default projectRouter;