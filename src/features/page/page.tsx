import React from "react"
import "./Page.sass"

type Component = JSX.Element

const Page: React.FC<{content: Component}> = ({content}) => {
    return (
        <div className="Page">
            { content }
        </div>
    )
}

export default Page