import React from 'react'


class SimpleEvents extends React.Component{

    handleClick=()=>{
        console.log("User clicked button!")

    }

    handleChange=()=>{
        console.log("User changed the input!!")

    }


    render(){
        return(
            <div>
            <h1>A check</h1>
            <button onClick={this.handleClick} className='btn'>click me</button>
            <input onChange={this.handleChange} className='inp' placeholder='write here' />
            </div>
        )
    }
}

export default SimpleEvents