import React from "react";
import { useState } from "react";
import {MdDeleteForever} from 'react-icons/md'
import {BiMessageSquareAdd} from 'react-icons/bi'
import "./Note.css"

const Note = (props) => {

    
    const today = new Date().toISOString().slice(0,10)
    const [input,setInput] = useState('')
    const maxCharacterCount = 120
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleAddItem = () => {
        const newNote = {
            text : input,
            date : today
        }
        setInput("")
        props.addNote(newNote)
    }

    const handleDeleteItem = () => {
        props.deleteNode(props.noteData.text)
    }
    return (
        <div className={props.isEdit ? "edit-note" : "note"}>
            {
                !props.isEdit &&
                <span className="note-header"> {props.noteData.text} </span>
            }
            {
                props.isEdit &&
                <textarea 
                    id="input"
                    className="note-input" 
                    placeholder="Add a note..."
                    value={input}
                    onChange={handleChange}
                    maxLength={maxCharacterCount}
                ></textarea>
            }
            {
                !props.isEdit && 
                <div className="note-footer">
                    <small> {props.noteData.date} </small>
                    <MdDeleteForever 
                    className="delete-icon"
                    onClick={handleDeleteItem}
                    />
                </div>
            }
            {
                props.isEdit &&
                <div className="note-footer">
                    <small> {maxCharacterCount - input.length} remaining </small>
                    <BiMessageSquareAdd onClick={() => handleAddItem()}
                    className="add-icon"></BiMessageSquareAdd>
                </div>
            }


        </div>
    )
}

export default Note