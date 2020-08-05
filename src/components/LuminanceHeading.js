import React,{useState} from 'react'
import chroma from "chroma-js";

export default function LuminanceHeading(props) {

    const {i}=props

    const [hover, setHover] = useState(false)
    const handleHover=()=>setHover(!hover)
    const handleLumenance=()=>(
       hover ? chroma(i.color).luminance() >= 0.7 ? {color: "black"} : {color: "white"} : null
    )

    return (
        <div className="color-container-full" onPointerEnter={handleHover} onPointerLeave={handleHover} style={{backgroundColor:i.color}} >
           <h2 style={hover ? chroma(i.color).luminance() >= 0.7 ? {color: "black"} : {color: "white"} : null}>
                {i.name}
            </h2>
        </div>
    )
}
