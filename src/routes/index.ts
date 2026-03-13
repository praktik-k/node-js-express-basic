import { Request, Response, Router } from "express";
import todosRouter from '../routes/todos'

const router = Router()

router.use('/todos', todosRouter)

router.all('*', (req: Request, res: Response) => {
    res.status(404).json({message: 'not found'})
})

export default router