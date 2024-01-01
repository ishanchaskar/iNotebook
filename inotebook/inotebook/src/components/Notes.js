import React, { useContext } from 'react'
import contextValue from "../context/notes/NoteContext"
import NoteItem from './NoteItem'
// import Notes from './Notes'
const Notes = () => {
    const context = useContext(contextValue)
    const {notes , setnotes} = context
  return (
<div className='row my-3'>
      <h1>Your note</h1>
      {notes.map((note) => {
        return <NoteItem note = {note}/>
      })}
      </div>
  )
}

export default Notes
