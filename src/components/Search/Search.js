import React, { useState } from "react";
import {FcSearch} from "react-icons/fc"
import "./Search.css"

const Search = ({searchNote}) => {
    
    const handleSearchChange = (event) => {
        searchNote(event.target.value)
    }
    return (
        <div className="search-bar">
            <FcSearch 
                className="search-icon"
            ></FcSearch>
            <input 
                className="search-input" 
                placeholder="Search notes..."
                onChange={handleSearchChange}
            ></input>
        </div>
    )
}

export default Search