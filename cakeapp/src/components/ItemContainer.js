import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream, buyCake } from '../redux';


function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("item container"+ownProps.cake)
    const itemState = ownProps.cake ?state.cake.numOfCakes : state.iceCream.numOfIceCream
    console.log("item container is..."+itemState)
    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
