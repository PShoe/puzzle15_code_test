# Objective

[Link to puzzle15](https://pshoe.github.io/puzzle15_code_test/)

Create a tile puzzle interface that consists of a frame divided into even tiles with one tile missing. These tiles should then be randomised so that user interaction is required to resolve the original frame. Tiles may only be moved into the empty position

![](https://github.com/PShoe/puzzle15_react/blob/master/reactpuzzle.png)

## Summary

This basic game is meant to resemble the logic of the classic  !['puzzle 15'](https://en.wikipedia.org/wiki/15_puzzle) challenge. Once the page is loaded (or refreshed) a set of tiles in random order will appear. The game is won when the user puts each tile in the correct numerical order.

## Technology Used

* ES6, React & CSS
* underscore library

## Design/Approach

I put the state on the board itself, rather than the individual squares. I also used objects as my dta type to signify each square space, it's ability to move, and it's coordinates on a 2-D grid.

To find if a space on the board is open for a tile to move into, I used the findSquaresCanMoveTo logic inside the lib folder. This calculates if there is a square to the left, right, above or below, then retrieves that square and sets it's "can move into" state to true.

Finally, checkWin that occurs each time a move is made, and will check your current state array of numbers to the correct numerical order, which is a const.

## Challenges/Improvements

The findSquaresCanMoveTo functionality is still quite bulky. I had trouble comparing arrays, and added a few toStrings() to be certain I knew the if expressions were correct. There is likely a more elegant way of comparing the coordinate arrays. There is also a fair amount of repetition on findSquaresCanMoveTo and when the squares are rendered to the page. If a dev would like to scale this up at a later date, it would be useful to convert some of these into for loops or functions with size parameters.
