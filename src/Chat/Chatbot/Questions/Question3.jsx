import React from 'react'

function Question3(props) {
    const options = [
        {
            id: 1,
            text: 'yes - I do not feel like eating as often or as much as i used to ',
            handler: props.actionProvider.handle_question3_option1
        },
        {
            id: 2,
            text: 'sometimes',
            handler: props.actionProvider.handle_question3_option2
        },
        {
            id: 3,
            text: 'no',
            handler: props.actionProvider.handle_question3_option3
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

export default Question3