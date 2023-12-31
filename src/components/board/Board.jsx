
import React from 'react'
import './Board.css'
import Column from '../column/Column'
import {column} from './BoardData'

export default function Board() {

    console.log(column)

  return (
          <div className='Board'>
            {Object.values(column).map((item) => 
            <Column id={item.id} className={item.className} title={item.title}/>
          )}
          </div>
      )
    }

