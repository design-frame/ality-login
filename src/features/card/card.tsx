import React from "react"
import "./card.sass"
import { Component, Banner } from "../../types"

type Props = {
    content: Component, 
    banner: Banner
}

const Card: React.FC<Props> = ({ content, banner }) => {
    return (
        <div className="Card">
            <div className="card-left">
                { content }
            </div>
            <div className="card-right">
                { banner }
            </div>
        </div>
    )
}

export default Card