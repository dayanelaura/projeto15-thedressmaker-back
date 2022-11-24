import { Router } from "express";
import { createOrder, findAllOrders } from "../controllers/order.controllers.js";
import { orderSchemaValidation } from "../middlewares/orderSchemaValidation.middleware.js";

const router = Router();

router.post("/order", orderSchemaValidation, createOrder);
router.get("/order", findAllOrders);

export default router;