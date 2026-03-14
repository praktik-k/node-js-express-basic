import {Response, Request, NextFunction} from 'express'
import { CustomError } from '../errors/custom-error'

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res.status(err.statuseCode).json(err.message)
    }
    res.status(500).json({message: 'internal server error'})
}