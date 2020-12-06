import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Container, WrapperDetails, DescribeProduct, InformationText, InformationPrice, WrapperActions } from './styles';
import ButtonAddCart from '../../components/ButtonAddCart';

const Details = (props) => {
    const [product, setProduct] = useState(null);

    const productId = +props.match.params.product_id;

    const cartProduct = useSelector(state => state.cart.find((cartData) => {
        return cartData.product.id === productId
    }));

    const dispatch = useDispatch();

    const onClickProduct = () => {
        dispatch(CartActions.tryAddProductToCart(product.id));
    }

    useEffect(() => {
        const getDetailProduct = async () => {
            const response = await api.get(`/products/${productId}`);

            if (response.status === 200){
                setProduct(response.data);
            }
        }

        getDetailProduct();
    }, [productId]);

    return (
        product ? (
            <Container>
                <img src={product.image} alt={product.title} />

                <WrapperDetails flex={1}>
                    <InformationText>
                        <span>Novo | 335 vendidos</span>
                        <label>{product.title}</label>
                    </InformationText>

                    <InformationPrice>
                        <label>{formatPrice(product.price)}</label>
                        <div>
                            em
                            <label> 12x R$ 49,16 sem juros</label>
                        </div>
                    </InformationPrice>

                    <DescribeProduct>
                        <label>Descrição</label>
                        <div>
                            {product.description}
                        </div>
                    </DescribeProduct>

                    <WrapperActions>
                        <ButtonAddCart amount={cartProduct?.amount ?? 0} onClick={onClickProduct}/>
                    </WrapperActions>
                </WrapperDetails>
            </Container>

        ) : null
    )
}

export default Details;