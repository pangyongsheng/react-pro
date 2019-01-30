import { ADD_CART, UPDATE_CART, DELETE_CART } from '../actions/todo';

const initialState = {
    cart: [{
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

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_CART:
            {
                return { 
                    cart:[
                        ...state.cart,
                        {
                            product: 'ccffee 200ml',
                            quantity: 1,
                            unitCost: 90
                        }
                    ]
                }
            }

        case DELETE_CART:
            {
                return {
                    cart: state.cart.slice(0,state.cart.length-1)
                }
            }

        default:
            return state;
    }
}