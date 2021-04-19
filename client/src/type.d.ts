interface IGame {
  _id: string
  board: Board
  p1: Player
  p2: Player
  turn: Player
}

interface GameProps {
  game: Game
}

type ApiDataType = {
  message: string
  status: string
  game: IGame
}

interface IMove {
  _id: string
  row: number
  col: number
  value: string
}