import React from 'react'
import {buyIceCream} from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props){
    return(
        <div>
           <h2>Number of IceCream  {props.numOfIceCream}</h2> 
           <button onClick={props.buyIceCream} >Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(">>"+state.numOfIceCream)
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }  
}

const mapDispatchToProps = dispatch => {
    console.log("inside icecreamcontainer")
    return {
        buyIceCream:() => dispatch(buyIceCream())
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)