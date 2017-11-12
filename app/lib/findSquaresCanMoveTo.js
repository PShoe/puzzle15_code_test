var _ = require('underscore');

export default function findSquaresCanMoveTo(squares,blankSquare){

  // Reset all squares to NOT being able to move

  _.map(squares, function(square){ return square.canMoveHere = "false" });

  // Find row and column of the blank square

  let row = blankSquare.coords[0];
  let col = blankSquare.coords[1];

  // Find any squares that are to the right, left, above and below of that square
  // Then set the adjacent squares canMoveHere value to true

  for(var boardIndex = 0; boardIndex  < squares.length; boardIndex ++){

    var squareToRight = [row, col + 1]
    var squareToLeft = [row, col - 1]
    var squareAbove = [row - 1, col]
    var squareBelow = [row + 1, col]
    var squareToCheck = (squares[boardIndex].coords).toString()

    if(squareToCheck === squareToRight.toString()) {
      var squareToRight = _.filter(squares, function(square){ return square.coords.toString() === squareToRight.toString() })[0];
      var squareNum = squareToRight.text
      var squareIndexArray = _.findIndex(squares, {text:squareNum})
      squares[squareIndexArray].canMoveHere = true
    }
    if(squareToCheck === squareToLeft.toString()) {
      var squareToLeft = _.filter(squares, function(square){ return square.coords.toString() === squareToLeft.toString() })[0];
      var squareNum = squareToLeft.text
      var squareIndexArray = _.findIndex(squares, {text:squareNum})
      squares[squareIndexArray].canMoveHere = true
    }
    if(squareToCheck === squareBelow.toString()) {
      var squareBelow = _.filter(squares, function(square){ return square.coords.toString() === squareBelow.toString() })[0];
      var squareNum = squareBelow.text
      var squareIndexArray = _.findIndex(squares, {text:squareNum})
      squares[squareIndexArray].canMoveHere = true
    }
    if(squareToCheck === squareAbove.toString()) {
      var squareAbove = _.filter(squares, function(square){ return square.coords.toString() === squareAbove.toString() })[0];
      var squareNum = squareAbove.text
      var squareIndexArray = _.findIndex(squares, {text:squareNum})
      squares[squareIndexArray].canMoveHere = true
    }
  }
}
