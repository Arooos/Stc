
import React from 'react'
import './Board.css'
import Column from '../column/Column'
import {column} from './BoardData'

export default function Board() {

  return (
          <div className='Board'>
            {Object.keys(column).map(item =>
            <Column id={item.id} className={item.className} title={item.title}/>
            )}
          </div>
      )
    }

