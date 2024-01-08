
import React from 'react'
import './Board.css'
import Column from '../column/Column'
import {column} from './BoardData'

export default function Board() {

  return (
          <div className='Board'>
            { 
              Object.values(column).map(item =>
               <Column key={item.id} status={item.status} title={item.title}/>  
            )}
          </div>
      )
    }

