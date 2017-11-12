import React from 'react'
import Square from './Square'
import './Board.css'
import findSquaresCanMoveTo from '../lib/findSquaresCanMoveTo'
import randomizeSquares from '../lib/randomizeSquares'
import checkWin from '../lib/checkWin'
var _ = require('underscore');


export default class Board extends React.Component {
  constructor() {
    super();
    this.handleSquareClick = this.handleSquareClick.bind(this)

    var squares = {
        items: [{
                text: '1',
                canMoveHere: false,
                coords: [1, 1]
            },
            {
                text: '2',
                canMoveHere: false,
                coords: [1, 2]
            },
            {
                text: '3',
                canMoveHere: false,
                coords: [1, 3]
            },
            {
                text: '4',
                canMoveHere: false,
                coords: [1, 4]
            },
            {
                text: '5',
                canMoveHere: false,
                coords: [2, 1]
            },
            {
                text: '6',
                canMoveHere: false,
                coords: [2, 2]
            },
            {
                text: '7',
                canMoveHere: false,
                coords: [2, 3]
            },
            {
                text: '8',
                canMoveHere: false,
                coords: [2, 4]
            },
            {
                text: '9',
                canMoveHere: false,
                coords: [3, 1]
            },
            {
                text: '10',
                canMoveHere: false,
                coords: [3, 2]
            },
            {
                text: '11',
                canMoveHere: false,
                coords: [3, 3]
            },
            {
                text: '12',
                canMoveHere: false,
                coords: [3, 4]
            },
            {
                text: '13',
                canMoveHere: false,
                coords: [4, 1]
            },
            {
                text: '14',
                canMoveHere: false,
                coords: [4, 2]
            },
            {
                text: '15',
                canMoveHere: false,
                coords: [4, 3]
            },
            {
                text: 'blank',
                canMoveHere: false,
                coords: [4, 4]
            }]
        }

    randomizeSquares(squares);

    this.state = {
      squares: squares,
      game_over: false,
    }
  }

  handleSquareClick(event) {
    var squares = this.state.squares.items
    var game_over = this.state.game_over
    const clickedSquare = squares[event]
    var blankSquareIndex =  _.findIndex(squares, {text:'blank'})
    var blankSquare = squares[blankSquareIndex]

    findSquaresCanMoveTo(squares,blankSquare)

    this.setState(
      squares:squares
    )

    if(clickedSquare.canMoveHere === true){
      blankSquare.text = clickedSquare.text
      clickedSquare.text = 'blank'
      this.setState(
        squares:squares
      )
    }

    if(checkWin(squares)){
      var game_over = true
      this.setState(
        { game_over:game_over }
      )
    }
}

renderSquare(squareIndex) {
    return (
      <Square
        value={this.state.squares.items[squareIndex].text}
        onClick={() => this.handleSquareClick(squareIndex)}
      />
    );
  }

  render() {
    const displayWinOrNot = this.state.game_over ? 'You won!':'Puzzle 15 - React'
    return (
      <div>
      <h1>{displayWinOrNot}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    )
  }
}
