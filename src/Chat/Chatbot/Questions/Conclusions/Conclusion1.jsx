import React from 'react'

function Conclusion1(props) {
    const option = {
        handler: props.actionProvider.continueHandler1
    }
  return (
    <div className="container d-flex justify-content-center ">
   
        <button onClick={option.handler} className="btn btn-primary btn-sm mx-2">Continue</button>
    </div>
  )
}

export default Conclusion1