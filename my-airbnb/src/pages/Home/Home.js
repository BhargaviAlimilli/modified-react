import React from 'react'
import {connect} from 'react-redux'
import SearchBox from './Search'
import './Home.css'


class Home extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
    auth:state.authReducer
    }
}

export default connect(mapStateToProps) (Home)

// export default Home