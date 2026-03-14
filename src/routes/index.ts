import { Request, Response, Router } from "express";
import todosRouter from '../routes/todos'
import { NotFoundError } from "../errors/not-found-error";

const router = Router()

router.use('/todos', todosRouter)

router.all('*', (req: Request, res: Response) => {
    throw new NotFoundError()
})

export default router