import React, {Component} from 'react';
import {connect} from 'react-redux';

class TestList extends Component{
    render(){
        console.log(this.props)
        return <div>123</div>
    }

}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(TestList);