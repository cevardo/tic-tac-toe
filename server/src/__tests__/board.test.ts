import { describe, expect, it } from '@jest/globals'
import { Board } from 'models/Board'

describe('Game Board', () => {
  it.skip('Prints an empty game board', () => {
    let sample = '- , - , - \n- , - , - \n- , - , - '
    console.log('sample\n', sample)
    const board = new Board()
    console.log('board\n',board.print())
    expect(sample).toEqual(board.print())
  })
})