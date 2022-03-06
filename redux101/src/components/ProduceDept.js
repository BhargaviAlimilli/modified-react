import React from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import produceInvUpdate from './../actions/produceInvUpdate'


class Produce extends React.Component {

    increment=(operator,index)=>{
        this.props.produceUpdate(operator,index)
    }

    render(){

        const produceInventory = this.props.produceData.map((item,i)=>{
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.increment('+',i)}} value="+" />
                    <input className="subtract-button" type="button" onClick={()=>{this.increment('-',i)}} value="-" />
                </div>
            )
        })
        return(
            <div>
                <h1>The produce food department!</h1>
                <ul>
                    {produceInventory}
                </ul>
            </div>
        )
    }
}

// console.log(connect)
function mapStateToProps(state){
    return{
        produceData: state.produceReducer
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        produceUpdate: produceInvUpdate
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Produce)