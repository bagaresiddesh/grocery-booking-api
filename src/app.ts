import express, { Application } from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/adminRoues';
import userRoutes from './routes/userRoutes';

const app: Application = express();
app.use(bodyParser.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

export default app;
