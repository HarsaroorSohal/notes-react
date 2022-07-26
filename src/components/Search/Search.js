import React, { useState } from "react";
import {FcSearch} from "react-icons/fc"
import "./Search.css"

const Search = ({search}) => {
    const [searchValue, setSearchValue] = useState('')
    const searchNotes = (event) => {
        search(searchValue)
    }

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="search-bar">
            <FcSearch 
                className="search-icon"
                onClick={searchNotes}
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