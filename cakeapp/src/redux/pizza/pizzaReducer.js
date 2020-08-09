import { BUY_PIZZA } from './pizzaType';


const initialState= {
        numOfPizza: 25
}

const pizzaReducer = (state = initialState , action ) =>{
    console.log("123")
    switch(action.type){
        case BUY_PIZZA:
            return {
                ...state,
                numOfPizza: state.numOfPizza - 1
            }
        default: return state
    }
}

export default pizzaReducer