import React from 'react';
import { MdDelete } from 'react-icons/md';
import ButtonAmount from '../../components/ButtonAmount';
import Button from '../../components/Button';
import { Container, WrapperImage, WrapperExtraData, WrapperFooter } from './styles';
import { NoResults } from '../../styles/global'
import { Flex } from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

const Cart = () => {

    const cartProducts = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const onChangeAmount = (product, value) => {
        dispatch(CartActions.updateAmountRequest(product.id, value));
    }

    const totalPrice = useSelector(state => state.cart.reduce((accumulate, itemCart) => {
        return accumulate + itemCart.amount * itemCart.product.price;
    }, 0));

    const onRemoveProduct = (product) => {
        dispatch(CartActions.removeProductFromCart(product.id));
    }

    const finishCart = () => {
        alert('Funcionalidade não implementada!');
    }

    return (
        <Container>
            {
                cartProducts.map(cartData => {
                    const product = cartData.product;

                    return (
                        <div key={product.id}>
                            <WrapperImage>
                                <img src={product.image} alt={product.title} />
                            </WrapperImage>
                            <WrapperExtraData>
                                <div>
                                    <label>{product.title}</label>
                                    <span>{formatPrice(product.price)}</span>
                                </div>

                                <div>
                                    <ButtonAmount
                                        value={cartData.amount}
                                        min={1}
                                        hideTitle={true}
                                        onChange={(value) => onChangeAmount(product, value)}
                                    />

                                    <Flex>
                                        <div>
                                            {formatPrice(cartData.amount * cartData.product.price)}
                                        </div>

                                        <div>
                                            <button type="button" onClick={() => onRemoveProduct(product)} >
                                                <MdDelete size={20} color="#282120" />
                                            </button>
                                        </div>
                                    </Flex>
                                </div>
                            </WrapperExtraData>
                        </div>
                    )
                })
            }

            {
                cartProducts.length ? (
                    <WrapperFooter>
                        <Button onClick={finishCart} text="Finalizar Compra" />

                        <div>
                            <span>TOTAL</span>
                            <strong>{formatPrice(totalPrice)}</strong>
                        </div>
                    </WrapperFooter>
                ) : (
                    <NoResults>Nenhum Item no Carrinho! :(</NoResults>
                )
            }
            
        </Container>
    )
}

export default Cart;