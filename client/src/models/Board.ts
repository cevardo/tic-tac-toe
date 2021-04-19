export class Square {
  row: number
  col: number
  value: string

  constructor(
    row = -1,
    col = -1,
    value = '-',
  ) {
    this.row = row
    this.col = col
    this.value = value
  }
}

export class Board {
  grid:  [ Square[], Square[], Square[] ]

  constructor() {
    this.grid = [ 
      [new Square(0, 0, '-'), new Square(0, 1, '-'), new Square(0, 2, '-')],
      [new Square(1, 0, '-'), new Square(1, 1, '-'), new Square(1, 2, '-')],
      [new Square(2, 0, '-'), new Square(2, 1, '-'), new Square(2, 2, '-')],
    ]
  }

  print() {
    let gridString = ''
    this.grid.forEach(row => {
      let rowString = ''
      row.forEach((sq: Square) => {
        rowString += sq.value
        rowString = sq.col < 2 
        ? rowString.concat(' , ') 
        : rowString = rowString.concat(' \n')
      })
      gridString += rowString
    })
    return gridString
  }
}