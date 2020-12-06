import api from '../../../services/api';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_PRODUCTS, setProductsFound } from './actions'

const searchProducts = function* ({ query }){
    const isOnlyNumber = query.length !== 0 && !isNaN(query);

    let response = null;

    if (isOnlyNumber){
        response = yield call(api.get, `/products/${query}`);
    } else {
        response = yield call(api.get, `/products?title_like=${query}`);
    }

    if (response.status === 200){
        const products = isOnlyNumber ? [response.data] : response.data;
        yield put(setProductsFound(products));
    } else {
        toast.error('Erro ao buscar produtos, tente novamente!');
    }
}

export default all([
    takeLatest(SEARCH_PRODUCTS, searchProducts),
])
