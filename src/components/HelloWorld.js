import React from 'react'


function HelloWorld(props) {
  console.log(props)
  return (
    <div>HelloWorld {props.name}, {props.surname}
     
    </div>
  )
}

export default HelloWorld