import React from "react"

function Card(props) {
    return (
        <div className="card">
            <div className="card-top">
                <h6>{props.emoji}</h6>
                <p>(Hover over)</p>
            </div>
            <div className="card-bot">
                <h6 className="cardTitle">{props.title}</h6>
                <p className="cardDesc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Card;