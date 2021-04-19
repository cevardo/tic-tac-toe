import { Response, Request } from 'express'
import { Game } from 'models/Game'
import { Board, Square } from 'models/Board'

export const createGame = async (req: Request, res: Response): Promise<void> => { 
  try {
    // Game should be stored server side
    const game: Game = await Promise.resolve(new Game(req.body.p1.name, req.body.p2.name))
    res
      .status(200)
      .json({ game })
  } catch (e) {
    throw e
  }
}

export const addMove = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body
    let board: Board = body.game.board
    const move: Square = body.square
  
    // Insert move to DB and return new board with additional move
    if (isValidMove(board, move)) {
      board.grid[move.row][move.col].value = move.value
    }
    res
      .status(200)
      .json({
        game: body.game
      })
  } catch (e) {
    throw e
  }
}

const isValidMove = (board: Board, move: Square) => {
  return board.grid[move.row][move.col].value === '-'
}

const endGame = (): Boolean => { 
  // Check all win conditions for player symbol
  return false  
}