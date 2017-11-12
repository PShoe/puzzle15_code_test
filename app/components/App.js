import React from 'react'
import Board from './Board'
import Square from './Square'
import './Board.css'



class App extends React.Component {
  render() {
    return (
      <div>
          <Board />
      </div>
    );
  }
}

module.exports = App
