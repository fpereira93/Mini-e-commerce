import { SET_PRODUCTS_FOUND } from './actions'

const initialState = [];

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_FOUND:
            return action.products;
        default:
            return state;
    }
}

export default ProductsReducer;