import React from 'react'
import '../sass/index.scss'
import seedColors from '../seed'
import LuminanceHeading from './LuminanceHeading';


export default function FullPallete() {

    const renderPalette = seedColors[1].colors.map(i=>(<LuminanceHeading i={i}/>))

    return (
        <div className="full-palette">
            <div className="palette-master-container"  >
            <div className="palette-container-create">
              {renderPalette}
              <h2 className="palette-heading">{seedColors[0].paletteName} {seedColors[0].emoji}</h2>
              </div>
            </div>
        </div>
    )
}
