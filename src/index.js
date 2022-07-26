import React from "react"
import ReactDOM from "react-dom"
import Notes from "./components/Notes/Notes"
import "./globalCSS.css"
const rootElement = document.getElementById("root")
const App = () => {
    return (
       
        <Notes></Notes>
    )
}

ReactDOM.render(App(), rootElement)