import React from 'react'

function Question2(props) {
    const options = [
        {
            id: 1,
            text: 'yes',
            handler: props.actionProvider.handle_question2_option1
        },
        {
            id: 2,
            text: 'no',
            handler: props.actionProvider.handle_question2_option2
        },
        {
            id: 3,
            text: 'sometimes',
            handler: props.actionProvider.handle_question2_option3
        },
        // {
        //     id: 4,
        //     text: 'Every Day',
        //     handler: props.actionProvider.handle_question2_option4
        // },
    ]
  return (
    <div className='container  text-center' style={{}}>
        
    <ul className='list-group '>
    {
        options.map(option => {
            return(
                <button className="btn btn-sm btn-rounded mb-1"  key={option.id} onClick={option.handler}><li className='list-group-item p-0 ' style={{backgroundColor: 'lightsalmon', boxShadow: '0px 0px 1px 1px gray'}}>{option.text}</li></button>
            )
        })
    }
    </ul>
</div>
  )
}

export default Question2