import  { ADD_TO_CART }  from '../action/car-action';
import  { UPDATE_CART }  from '../action/car-action';
import  { DELETE_FROM_CART }  from '../action/car-action';
const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}
export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case UPDATE_CART: {
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }

        case DELETE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }


        default:
            return state;
    }
}