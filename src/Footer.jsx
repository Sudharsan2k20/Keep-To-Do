import React from "react"

const date = new Date();
const year = date.getFullYear()
console.log(date);

function Footer(){
    return(
       <footer>
            <p className="copyrights">Created by Sudarsan Manickam. <a href="https://sudharsan2k20.github.io/PersonalPortfolio/">Visit Site!</a></p>
        </footer>
           
        
    )
}

export default Footer