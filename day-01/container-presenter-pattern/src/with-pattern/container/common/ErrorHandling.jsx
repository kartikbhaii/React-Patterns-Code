
import React from 'react'

const ErrorHandling = ({title, message, onRetry}) => {
  return (
    <div className="error-container">
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={onRetry}>Try Again</button>
      </div>
  )
}

export default ErrorHandling