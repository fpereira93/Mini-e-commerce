import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct';
import { Container, ProductList } from './styles';
import history from '../../services/history';
import * as CartActions from '../../store/modules/cart/actions';
import { NoResults } from '../../styles/global';

const Home = () => {
    const products = useSelector(state => state.products);

    const productsAmount = useSelector(state => state.cart.reduce((accumulate, itemCart) => {
        accumulate[itemCart.product.id] = itemCart.amount;
        return accumulate;
    }, {}));

    const dispatch = useDispatch();

    const onClickProduct = (product) => {
        dispatch(CartActions.tryAddProductToCart(product.id));
    }

    const onClickToViewDetails = (product) => {
        history.push(`/details/${product.id}`);
    }

    return (
        <Container>
            {
                products.length ? (
                    <ProductList>
                        {
                            products.map(product => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                    amount={productsAmount[product.id] ?? 0}
                                    onClickImage={() => onClickToViewDetails(product)}
                                    onClick={() => onClickProduct(product)}
                                />
                            ))
                        }
                    </ProductList>
                ) : (
                    <NoResults>Nenhum resultado encontrado!</NoResults>
                )
            }
            
        </Container>
    )
}

export default Home;