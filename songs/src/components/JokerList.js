import React, {Component} from 'react';
import {connect} from 'react-redux';

class JokerList extends Component{
    render(){
        console.log(this.props);
        return <div>JokerList</div>;
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(JokerList);