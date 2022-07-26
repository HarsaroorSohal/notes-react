import React, { useEffect } from "react"
import { useState } from "react"
import Note from "../Note/Note"
import Search from "../Search/Search"
import "./Notes.css"

const Notes = ({notes,addNote,deleteNote}) => {
    return (
        <div>
            <div className="notes-app"> 
                {   
                    notes.map((note) => {
                    return <Note key={note.text} noteData={note} isEdit={false} deleteNode={deleteNote}></Note>
                })}
                <Note isEdit={true} addNote={addNote}></Note>
            </div>
        </div>
    )
}

export default Notes