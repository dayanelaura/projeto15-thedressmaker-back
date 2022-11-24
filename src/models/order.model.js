import joi from 'joi';

export const orderSchema = joi.object({
    neckline: joi.string().required().max(1).min(1), 
    sleeve: joi.string().required().max(1), 
    back: joi.string().required().max(1).min(1),
    skirt: joi.string().required().max(1).min(1), 
    quantity: joi.number().required(),
    price: joi.string().required(),
    createAt: joi.string().required()
    //para outros tipos de validação, olhar no batepapouol-api project
});
