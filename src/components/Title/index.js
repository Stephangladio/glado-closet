import React from 'react'

const Title = (props) => {
    const { tag = "h1", className = "", children } = props
    const Tag = tag
    return (
        <Tag className={className}>{children}</Tag>
    )
}

export default Title