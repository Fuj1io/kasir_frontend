import React from 'react'

function LoadingElement() {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center gap-2 ">
    <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
  <small>Wait A Moment...</small>
</div>
  )
}

export default LoadingElement;