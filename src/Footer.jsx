import React from "react"

const date = new Date();
const year = date.getFullYear()
console.log(date);

function Footer(){
    return(
       <p>Copyrights {year}</p>
    )
}

export default Footer