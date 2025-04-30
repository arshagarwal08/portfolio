import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRouter from './routes/contactRoute.js';
import connectDB from './database/db.js'
import projectRouter from './routes/projectRoute.js';

dotenv.config();

const app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

app.use('/contact', contactRouter);
app.use('/project', projectRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
