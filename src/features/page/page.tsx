import React from "react"
import "./Page.sass"
import { Component } from "../../types"

const Page: React.FC<{content: Component}> = ({content}) => {
    return (
        <div className="Page">
            { content }
        </div>
    )
}

export default Page