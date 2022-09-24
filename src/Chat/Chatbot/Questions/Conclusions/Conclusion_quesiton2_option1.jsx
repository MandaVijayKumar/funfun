import React from 'react'

function Conclusion_quesiton2_option1(props) {
    const option = {
        handler: props.actionProvider.continueHandler_question2_option1
    }
  return (
    <div className="container d-flex justify-content-center ">
   
        <button onClick={option.handler} className="btn btn-primary btn-sm mx-2">Continue</button>
    </div>
  )
}

export default Conclusion_quesiton2_option1