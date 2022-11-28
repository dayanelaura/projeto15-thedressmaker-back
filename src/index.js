import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import orderRoutes from './routes/order.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(orderRoutes);
app.use(authRoutes);
app.use(userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});