import React, { useEffect } from "react"
import { useState } from "react"
import Note from "../Note/Note"
import Search from "../Search/Search"
import "./Notes.css"

const Notes = () => {
    const [notes, setNotes] = useState([{text : "First Note" , date : "123"}]);

    useEffect(() => {
        const storageNotes = JSON.parse(
            localStorage.getItem('notes-data')
        )
        if(storageNotes) {
            setNotes(storageNotes)
        }
    },[])

    useEffect(() => {
        localStorage.setItem(
            'notes-data',
            JSON.stringify(notes)
        )
    },[notes])
    
    const addNote = (note) => {
        const newNotes = [...notes, note]
        setNotes(newNotes)
    }

    const deleteNote = (text) => {
        const newNotes = notes.filter((note) =>  note.text != text)
        setNotes(newNotes)
    }

    const SearchNotes = (search) => {
        console.log("searching")
        const newNotes = notes.filter((note) =>  note.text.includes(search))
        setNotes(newNotes)
    }
    return (
        <div>
            <div className="notes-header">Notes App</div>
            <Search search={SearchNotes}></Search>
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