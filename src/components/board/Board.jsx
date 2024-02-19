import React from 'react'
import './Board.sass'
import Column from '../column/Column'
import {column} from './BoardData'
import {DragDropContext} from "react-beautiful-dnd"
import { useDispatch } from 'react-redux'
import { dragAndDrop } from '../../redux/tasks/tasks.slice'


export function Board() {
  const dispatch = useDispatch();
  const handleDragDrop = (results) => {
    const {source, destination} = results
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.droppableId === destination.droppableId) return
    else {
      dispatch(dragAndDrop({results}))
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
        <div className='Board'>
          { 
            Object.values(column).map(item =>
              <Column key={item.id} status={item.status} title={item.title}/>  
          )}
        </div>
    </DragDropContext>
      )
    }

