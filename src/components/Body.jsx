import React from "react"
import Card from "./Card"
import cards from "./cards.js"

// function newCard(card) {
//    return( <Card key={card.id} emoji={card.emoji} title={card.title} desc={card.desc} />)
// }

function Body() {
    return (<div className="body">
        {cards.map(card => <Card key={card.id} emoji={card.emoji} title={card.title} desc={card.desc} />)}
    </div>
    )}

export default Body;