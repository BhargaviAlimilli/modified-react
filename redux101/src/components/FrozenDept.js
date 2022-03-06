import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React from 'react'
import frozenInvUpdates from './../actions/frozenInvUpdate'


class Frozen extends React.Component{


    increment=(operation, index)=>{

        this.props.frozenUpdate(operation,index)
    }

    render(){

        const frozenInventory= this.props.frozenData.map((item,index)=>{
            return(
            <div  key={index}>
                 <li>{item.food}: {item.quantity}</li>
                 <input type='button' onClick={()=>{this.increment('+',index)}} value='+' />
                 <input type='button' onClick={()=>{this.increment('-', index)}} value='-' />
            </div>
            )
        })

        return(
            <div>
                <h1>Welcome to frozen dept</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        )
    }


}

function mapStateTpProps(state){

    return({
        frozenData: state.frozenReducer
    })
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        frozenUpdate: frozenInvUpdates
    }, dispatch)
}



export default connect(mapStateTpProps, mapDispatchToProps)(Frozen)