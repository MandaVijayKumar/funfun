
import React from 'react';


function Question1(props) {
    const options = [
        {
            id: 1,
            text: 'A. Never',
            handler: props.actionProvider.handle_question1_option1
        },
        {
            id: 2,
            text: 'B. Occasionally',
            handler: props.actionProvider.handle_question1_option2
        },
        {
            id: 3,
            text: 'C. Often ',
            handler: props.actionProvider.handle_question1_option3
        },
        {
            id: 4,
            text: 'D. Every Day',
            handler: props.actionProvider.handle_question1_option4
        },
    ]
  return (
    <div className='container  text-center' style={{ marginTop: '0px'}}>
        
        <ul className='list-group '>
        {
            options.map(option => {
                return(
                   
                    <button className="btn btn-sm btn-rounded mb-1"  key={option.id} onClick={option.handler}><li className='list-group-item p-0 ' style={{backgroundColor: 'gray', boxShadow: '0px 0px 1px 1px lightblue', color:'white', cursor:'pointer'}}>{option.text}</li></button>
                )
            })
        }
        </ul>
    </div>
  )    
    

  
}

export default Question1