export const TRY_ADD_PRODUCT_TO_CART = 'TRY_ADD_PRODUCT_TO_CART';
export const tryAddProductToCart = (id) => {
    return {
        type: TRY_ADD_PRODUCT_TO_CART,
        id,
    };
}

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addProductToCart = (data) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        data,
    };
}

const createActionAmount = (type) => {
    return (id, amount) => ({
        type,
        id,
        amount,
    })
}

export const UPDATE_AMOUNT_PRODUCT = 'UPDATE_AMOUNT_PRODUCT';
export const updateAmountProduct = createActionAmount(UPDATE_AMOUNT_PRODUCT)

export const UPDATE_AMOUNT_REQUEST = 'UPDATE_AMOUNT_REQUEST';
export const updateAmountRequest = createActionAmount(UPDATE_AMOUNT_REQUEST)

export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export function removeProductFromCart(id) {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        id,
    };
}