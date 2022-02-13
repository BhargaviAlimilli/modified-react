import React from 'react'

class StatesInAction extends React.Component{

    constructor(){
        super()

        this.state={
            text: "State is happening!!"
        }

        setTimeout(()=>{

            this.setState({
                text: "State has changed!!!"
            })
        }, 5000)

    }

    render(){
        return(
            <div>
            <h1>"State In Action</h1>,
            <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default StatesInAction