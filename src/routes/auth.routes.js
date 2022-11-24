import { Router } from "express";
import { signIn } from "../controllers/auth.controllers.js";
import { signInBodyValidation } from "../middlewares/signInBodyValidation.js";

const router = Router();

router.post('/sign-in', signInBodyValidation, signIn);

export default router;
