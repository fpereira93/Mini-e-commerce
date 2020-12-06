import React from 'react';
import { formatPrice } from '../../util/format';
import ButtonAddCart from '../ButtonAddCart';
import { Container, WrapperImage, WrapperInfo } from './styles';

const CardProduct = (props) => {

    let buttonAddFirst = false;

    const onClickContainer = () => {
        if (!buttonAddFirst){
            props.onClickCard();
        }

        buttonAddFirst = false;
    }

    const onClickButtonAdd = () => {
        buttonAddFirst = true;
        props.onClick();
    }

    return (
        <Container onClick={onClickContainer}>
            <WrapperImage>
                <img src={props.product.image} alt={props.product.title} />
            </WrapperImage>

            <WrapperInfo>
                <label>{props.product.title}</label>
                <span>{formatPrice(props.product.price)}</span>
            </WrapperInfo>

            <ButtonAddCart amount={props.amount} onClick={onClickButtonAdd}/>
        </Container>
    )
}

export default CardProduct;