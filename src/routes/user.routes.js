import { Router } from "express";
import { signUp, findAllUsers, updateUser } from "../controllers/user.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { updateUserSchemaValidation, userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";

const router = Router();

router.post('/sign-up', userSchemaValidation, signUp);

router.use(authRoutesValidation);

router.get('/users', findAllUsers);
router.put('/users/:id', updateUserSchemaValidation, updateUser);

export default router;