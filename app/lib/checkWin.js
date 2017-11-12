var _ = require('underscore');

export default function checkWin(squares) {

  const correct_order = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,blank"

  var current_game_order = []
  for(var i =0; i < squares.length; i++){
    var textProp = squares[i].text
    current_game_order.push(textProp)
  }
  current_game_order = current_game_order.toString()
  
  if(current_game_order === correct_order){
    return true
  } else {
    return false
  }
}
