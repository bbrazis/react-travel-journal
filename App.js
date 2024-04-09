import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
    const buildCards = data.map(card => {
        return (
            <Card
                key={card.id} 
                {...card}
            />
        )
    })
    return (
        <div className="app--wrapper">
            <Navbar />
            <main>
                <div className="card--grid-wrapper">
                    {buildCards}
                </div>
            </main>
        </div>
    )
}