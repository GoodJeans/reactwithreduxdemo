import React from 'react'
import {buyCake} from '../redux'
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <div>
           <h2>Number of cakes --{props.numOfCakes}</h2> 
           <button onClick={props.buyCake} >Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("cake num of cakes.."+state.cake.numOfCakes)
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)