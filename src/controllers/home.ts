import { Request, Response } from 'express'

export function getHomePage (req: Request, res: Response) {
    res.json({ message: 'home page get' })
}

export function postHomePage (req: Request, res: Response) {
    console.log('body---', req.body);
    
    res.json({ message: 'home page post' })
}