import React from 'react'
import Board from './Board'
import './Square.css'

export default function Square(props){
  const classNameSquare = props.value === 'blank' ? 'blankSquare' : 'fullSquare'
  return (
    <button className={classNameSquare} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
