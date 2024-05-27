import React, {useState} from "react"
function Hello(props){
    
    const hello = <p>Hello {props.name}</p>
    const noName = <p>You forgot to enter your name</p>
    
    return(
        (props.name!=null ? hello : noName)
    )

}

export default Hello