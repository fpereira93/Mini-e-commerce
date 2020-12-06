import { toast } from "react-toastify";
import { all, takeLatest, select, call, put } from "redux-saga/effects"
import api from "../../../services/api";
import history from '../../../services/history';
import { addProductToCart, TRY_ADD_PRODUCT_TO_CART, updateAmountProduct, UPDATE_AMOUNT_REQUEST } from "./actions"

const tryAddProductToCart = function* ({ id }){

    const productExists = yield select(
        state => state.cart.find(cartItem => cartItem.product.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Estoque esgotado!');
        return;
    }

    console.log(productExists);

    if (productExists) {
        yield put(updateAmountProduct(id, amount))
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            product: response.data,
            amount
        }

        yield put(addProductToCart(data));

        history.push('/cart');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) {
        return;
    }

    const stock = yield call(api.get, `stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Estoque esgotado!');
        return;
    }

    yield put(updateAmountProduct(id, amount));
}

export default all([
    takeLatest(TRY_ADD_PRODUCT_TO_CART, tryAddProductToCart),
    takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount)
])
