import {Response, Request, NextFunction} from 'express'

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(500).json({message: 'internal server error'})
}