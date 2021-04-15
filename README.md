# Pre-TestExample - Tic-Tac-Toe Puzzle
Tic-tac-toe or Xs and Os is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks
in a horizontal, vertical, or diagonal row is the winner.

Here is the prioritized backlog (most to least important) - be sure to write a unit test for each task and commit your code before proceeding to the next item.

### Create the Board
  - The board is made up three rows and three columns, totalling 9 "squares"
  - The board should print to the screen in a simple format

e.g.
```
> tic-tac-toe
Welcome! Here is your board:
- , -, -
- , -, -
- , -, -
```

### Create 2 players and make the 1st move by both players
  - Each player should have a unique name
  - The players should be able to move an unpopulated square
- Make sure to show which player is at play

e.g.
```
> tic-tac-toe
Welcome! Here is your board:
- , -, -
- , -, -
- , -, -
Player1 (X) where would you like to move?
> 2 2
- , -, -
- , X, -
- , -, -
Player2 (O) where would you like to move?
> 1 1
O , -, -
- , X, -
- , -, -
```

### Game Play

Players prompted for a move and should alternate turns
Board should be displayed after each turn

e.g.
```
Player1 (X) where would you like to move?
> 2 2
- , -, -
- , X, -
- , -, -
Player2 (O) where would you like to move?
> 1 1
O , -, -
- , X, -
- , -, -
...
```


### Check for End
Check for a winner (3 in a row, vertically, horizontally, or diagonally
e.g.
```
Player1 (X) where would you like to move?
> 1 3
O , O, X
O , X, X
X , -, -
Player1 WINS!
```

## Sample Game Flow
```
> tic-tac-toe
Welcome! Here is your board:
- , -, -
- , -, -
- , -, -
Player1 (X) where would you like to move?
> 2 2
- , -, -
- , X, -
- , -, -
Player2 (O) where would you like to move?
> 1 1
O , -, -
- , X, -
- , -, -
...
Player1 (X) where would you like to move?
> 1 3
O , O, X
O , X, X
X , -, -
Player1 WINS!
```