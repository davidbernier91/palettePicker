import React from 'react'
import seedColors from '../seed'

export default function Palette() {

    const renderPalette = seedColors.map(palette=>(
        <div className="palette-container-small">
            {palette.colors.map(color=>(
            <div className="color-container" style={{backgroundColor:color.color}}></div>))}
                <h2 className="palette-heading">{palette.paletteName} {palette.emoji}</h2>
        </div>

    ))

    return (
        <div className="palette-master-container"  >
          {renderPalette}
        </div>
    )
}
