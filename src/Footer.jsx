import React from "react"

const date = new Date();
const year = date.getFullYear()
console.log(date);

function Footer(){
    return(
       <footer>
            <p className="copyrights">Copyrights {year}</p>
        </footer>
           
        
    )
}

export default Footer