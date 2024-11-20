import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use userRoutes for any routes starting with /user
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});