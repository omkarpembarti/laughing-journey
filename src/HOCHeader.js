import React, { Fragment } from 'react'

const HOCHeader = (Component) => {
    return (
        (props) => {
            return (
                <div style={{
                    backgroundColor: 'orange', 'border': '2px solid black'
                }}>
                    <Component  {...props
                    } />
                </div >
            )
        }
    )
}

export default HOCHeader;



//In React component is a div wrapped inside the function