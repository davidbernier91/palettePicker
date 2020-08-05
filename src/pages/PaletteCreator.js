import React from 'react'

import SideBar from '../components/SideBar'
import FullPalette from '../components/FullPalette'

export default function PaletteCreator() {
    return (
        <div className="palete-creator-container"> 
           <SideBar />
            <FullPalette />
        </div>
    )
}
