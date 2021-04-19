import { Router } from "express"
import { createGame, addMove } from "../services"

const router: Router = Router()

router.get("/create-game", createGame)

router.post("/add-move", addMove)

export default router