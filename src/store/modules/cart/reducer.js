import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_AMOUNT_PRODUCT } from './actions';
import produce from 'immer';

const initialState = [];

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return [ ...state, action.data ];
        case UPDATE_AMOUNT_PRODUCT:
            return produce(state, draft => {
                const productIndex = draft.findIndex(cartItem => cartItem.product.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        case REMOVE_PRODUCT_FROM_CART:
            return produce(state, draft => {
                const productIndex = draft.findIndex(cartItem => cartItem.product.id === action.id)

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        default:
            return state;
    }
}

export default CartReducer;