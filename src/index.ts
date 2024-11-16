import express from 'express';
import adminRoutes from './routes/adminRoues';

const app = express();

app.use(express.json());

// Use admin routes
app.use('/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
