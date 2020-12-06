import React from 'react';
import { formatPrice } from '../../util/format';
import ButtonAddCart from '../ButtonAddCart';
import { Container, WrapperImage, WrapperInfo } from './styles';

const CardProduct = (props) => {
    return (
        <Container>
            <WrapperImage onClick={props.onClickImage}>
                <img src={props.product.image} alt={props.product.title} />
            </WrapperImage>

            <WrapperInfo>
                <label>{props.product.title}</label>
                <span>{formatPrice(props.product.price)}</span>
            </WrapperInfo>

            <ButtonAddCart amount={props.amount} onClick={props.onClick}/>
        </Container>
    )
}

export default CardProduct;