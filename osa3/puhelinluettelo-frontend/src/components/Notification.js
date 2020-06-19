import React from 'react'
import './notification.css'

const Notification = ({ message, isError }) => {
    if (message === null){ return null }

    let className
    if (isError){ className = 'error' }
    else { className = 'notification' }

    return (
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification