import React from 'react'
import World from '../icons/World'

export default function Navbar() {
    return (
        <nav>
            <a href="#" className="nav--logo-wrapper">
                <World />
                <p>my travel journal.</p>
            </a>
        </nav>
    )
}