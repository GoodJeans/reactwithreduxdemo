import {BUY_CAKE} from '../cakes/cakeType';

export const buyCake = (number = 1) => {
    return{
        type: 'BUY_CAKE',
        payload: number
    }
}