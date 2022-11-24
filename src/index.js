import express from 'express';
import cors from 'cors';
//import joi from 'joi';
import orderRoutes from './routes/order.routes.js';
import authRoutes from './routes/auth.routes.js';

/* const userSchema = joi.object({
    name: joi.string().min(1).required(),
}); */

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(orderRoutes);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);
});