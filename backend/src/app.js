import express from 'express';
import cors from 'cors';
import resumeRoutes from './routes/resume.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/resume', resumeRoutes);

export default app;
