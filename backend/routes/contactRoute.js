import express from 'express';
import { handleContactForm } from '../controller/contactController.js';

const contactRouter = express.Router();

contactRouter.post('/', handleContactForm);

export default contactRouter;
