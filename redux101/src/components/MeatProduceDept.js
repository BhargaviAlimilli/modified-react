import React from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import meatInvUpdates from './../actions/meatInvUpdate'


class Meat extends React.Component {
    increment=(operation,index)=>{
        this.props.meatUpdates(operation,index)
    }
    render(){
        const meatInventory = this.props.meatData.map((item,i)=>{
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
                <h1>The Meat department!</h1>
                <ul>
                    {meatInventory}
                </ul>
            </div>
        )
    }
}

// console.log(connect)
function mapStateToProps(state){
    return{
        meatData: state.meatReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        meatUpdates: meatInvUpdates
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Meat)