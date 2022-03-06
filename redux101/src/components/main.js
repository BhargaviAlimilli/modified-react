import React from 'react'
import {connect} from 'react-redux'
import clearInventory from './../actions/clearInventory'
import { bindActionCreators } from 'redux'

class Main extends React.Component{
    render(){
        const frozenQ= this.props.frozenData.reduce((accum,item)=>accum+item.quantity,0)
        const meatQ= this.props.meatData.reduce((accum,item)=>accum+item.quantity,0)
        const produceQ= this.props.produceData.reduce((accum,item)=>accum+item.quantity,0)
        return(
            <div>
                <h1>Total Inventory</h1>
                <h3>frozen quantity: {frozenQ} </h3>
                <h3>meat quantity: {meatQ}</h3>
                <h3>produce quantity: {produceQ} </h3>
                <button onClick={this.props.clearInventory}>Clear all Inventory!!</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        frozenData: state.frozenReducer,
        meatData: state.meatReducer,
        produceData: state.produceReducer
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory: clearInventory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)