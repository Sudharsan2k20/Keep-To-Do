import React from "react"
import Footer from "./Footer"
import Note from "./Note"

function App(){
    return(
        <div>
            <header><h1 className="title">Keep To-Do</h1></header>

            <Note></Note>


            <Footer></Footer>
        </div>
        
    ) 
}

export default App