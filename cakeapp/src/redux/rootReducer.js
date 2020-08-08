import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import cookiesReducer from './cookies/cookieReducer'
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookies: cookiesReducer
    
})

export default rootReducer