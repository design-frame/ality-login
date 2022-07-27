import React from "react"
import "./card.sass"

const Card: React.FC<{label:string}> = ({ label }) => {
    return (
        <div className="Card">{label}</div>
    )
}

export default Card