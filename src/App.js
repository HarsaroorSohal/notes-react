import React from "react"
import { useState, useEffect } from "react";
import Notes from "./components/Notes/Notes"
import Search from "./components/Search/Search"
import "../src/globalCSS.css"
const NotesApp = () => {

    const [notes, setNotes] = useState([{text : "Example Note" , date : "17-02-1999"}]);
    const [searchValue, setSearchValue] = useState('')

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

    const searchNote = (search) => {
        setSearchValue(search)
    }
    
    return (
        <div>
            <div className="notes-header">NOTES APP</div>
            <Search searchNote={searchNote}></Search>
            <Notes 
                notes={notes.filter((node) => node.text.includes(searchValue))} 
                addNote={addNote} 
                deleteNote={deleteNote}
            ></Notes>
            <a href="https://github.com/HarsaroorSohal" className="footer">@Harsaroor Sohal</a>
        </div>
        )
}

export default NotesApp