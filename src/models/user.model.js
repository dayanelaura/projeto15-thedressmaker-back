import joi from 'joi';

export const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required().min(2),
    password: joi.string().min(4).required(),
    type: joi.string().valid("admin", "user").required()
});
