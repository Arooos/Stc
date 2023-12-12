import Column from './Column'
import React from 'react'
import '../Style/Board.css'
export default function Board() {

  return (
    <div className='Board'>
        <Column className="Column Todo" id={"1"} title={"Неразобранные задачи"}/>
        <Column className="Column Plan" id={"2"} title={"В планах"}/>
        <Column className="Column Work" id={"3"} title={"В работе"}/>
        <Column className="Column Done" id={"4"} title={"Выполнено"}/>
    </div>
  )
}
