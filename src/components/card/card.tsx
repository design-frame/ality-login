import React from "react"
import "@components/card/card.sass"

function Card({label}) {
    return (
        <div className="Card">{label}</div>
    )
}

export default Card