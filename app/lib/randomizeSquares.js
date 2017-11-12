var _ = require('underscore');

export default function randomizeSquares(squares) {
  var tileArray = _.shuffle(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','blank']);
  for(var i = 0; i < tileArray.length; i ++){
   squares.items[i].text = tileArray[i]
  }
}
