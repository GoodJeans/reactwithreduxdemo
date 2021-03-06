import React from 'react'
import { connect } from 'react-redux';
import { buyPizza } from '../redux';

function PizzaContainer(props){
    return(
        <div>
            <h2>Number Of Pizza {props.numOfPizza}</h2>
            <button onClick={props.buyPizza}>Buy Pizza</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfPizza: state.pizza.numOfPizza
    }
}
const mapDispatchToProps = dispatch => {
    console.log("pizza dispatch")
    return {
        buyPizza:() =>dispatch(buyPizza())
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)

