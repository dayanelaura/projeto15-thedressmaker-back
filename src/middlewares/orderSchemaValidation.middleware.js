import dayjs from "dayjs";
import { orderSchema } from "../models/order.model.js";

export function orderSchemaValidation(req, res, next){
    const { neckline, sleeve, back, skirt, quantity, price } = req.body;

    const orderObject = {
        neckline, 
        sleeve, 
        back,
        skirt, 
        quantity,
        price: `R$${price}`,
        createAt: dayjs().format("DD/MM/YYYY")
        //para outros tipos de validação, olhar no batepapouol-api project
    };

    const { error } = orderSchema.validate(orderObject, { 
        abortEarly: false 
    });

    if(error){
        const errors = validation.error.details;
        const errorsTXT = errors.map(detail => detail.message);
        return res.status(422).send(errorsTXT);
    }   

    res.locals.order = orderObject;

    next();
}