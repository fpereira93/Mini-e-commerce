export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const searchProducts = (query) => {
    return {
        type: SEARCH_PRODUCTS,
        query,
    };
}

export const SET_PRODUCTS_FOUND = 'SET_PRODUCTS_FOUND';
export const setProductsFound = (products) => {
    return {
        type: SET_PRODUCTS_FOUND,
        products,
    };
}