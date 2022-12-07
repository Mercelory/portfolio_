import React from 'react'

const colorList = ['red', 'blue', 'green', 'yellow', 'black'];
const colorGrid = colorList.map((color)=> {
    return(
        <div className = " float-left m-1.5 rounded-full w-5 h-5 "  key = {color} style = {{backgroundColor:`${color}`}}>
        </div>
    )
})

function ColorContainer() {
    return(
        <div id = "color-grid">
            {colorGrid}
            </div>
    )
}

export default ColorContainer