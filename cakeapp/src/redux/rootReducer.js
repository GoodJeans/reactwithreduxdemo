import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import cookiesReducer from './cookies/cookieReducer'
import pizzaReducer from './pizza/pizzaReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookies: cookiesReducer,
    pizza: pizzaReducer
    
})

export default rootReducer