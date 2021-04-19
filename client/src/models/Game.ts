import { Board } from './Board'
import { Player } from './Player'

export class Game {
  board: Board
  p1: Player
  p2: Player
  turn: Player
  constructor(
    p1: string = 'Player1',
    p2: string = 'Player2'
  ) {
    this.board = new Board()
    this.p1 = new Player(p1, 'X')
    this.p2 = new Player(p2, 'O')
    this.turn = this.p1
  }
}