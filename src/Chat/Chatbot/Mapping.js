import React from 'react'

function Mapping() {
    const options = [
        {text: 'java', handler: ()=>{}, id: 1},
        {text: 'cprog', handler: ()=>{}, id: 2},
        {text: 'javascript', handler: ()=>{}, id: 3},
        {text: 'python', handler: ()=>{}, id: 4},
        
    ]
    const mapOptions = options.map(option =>(<button key={option.id}>{option.text}</button>))
    console.log(mapOptions);
    const marks = [ 23,443,54,543]
    return (
    <div>
        {mapOptions}
        <br/>
        {marks}
    </div>
  )
}


export default React.memo(Mapping);