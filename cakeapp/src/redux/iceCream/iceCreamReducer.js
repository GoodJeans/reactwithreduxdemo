import { BUY_ICE_CREAM } from './iceCreamType'

const initialState = {
    numOfIceCream: 10
}

const iceCreamReducer = (state = initialState, action ) => {
    console.log("123")
    console.log(state.numOfIceCream)
    switch(action.type){
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

export default iceCreamReducer