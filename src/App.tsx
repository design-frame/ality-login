import React from "react"
import "./App.sass"
import Card from "./components/card/card"

function App() {
    const text = "Some content"
    return (
        <div className="App">
            New Content Here...
            <Card label={text}/>
        </div>
    )
}

export default App
