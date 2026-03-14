import {celebrate, Joi, Segments} from 'celebrate'

export const validateParams = celebrate({
    [Segments.PARAMS]: {
        id: Joi.number().required()
    }
})