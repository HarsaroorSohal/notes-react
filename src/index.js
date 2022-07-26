import React from "react"
import ReactDOM from "react-dom"
import NotesApp from "./App"
import "./globalCSS.css"
import store from "./store/store"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")

const App = () => {
     return (
        <div>
            <Provider store={store}>
                <NotesApp></NotesApp>
            </Provider>
        </div>
    )
}

ReactDOM.render(App(), rootElement)