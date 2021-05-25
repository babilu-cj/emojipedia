import React from "react"

function Card(props) {
    return (
        <div className="card">
            <dl>
                <dt className="emoji">{props.emoji}</dt>
                <dt className="cardTitle">{props.title}</dt>
                <dd className="cardDesc">{props.desc}</dd>
            </dl>
        </div>
    )
}

export default Card;