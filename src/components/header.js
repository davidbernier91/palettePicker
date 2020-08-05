import React from 'react'
import {Link} from 'gatsby'


export default function Header() {
    return (
    <div>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='/PaletteCreator'>ColorPalette</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}
