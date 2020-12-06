import React, { useEffect } from 'react';
import { Container, Cart, WrapperAvatar, InforUser, WrapperData } from './styles';
import logo from '../../assets/images/logotipo.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import InputSearch from '../InputSearch'
import { Link } from 'react-router-dom';
import history from '../../services/history';

import { useDispatch, useSelector } from 'react-redux';
import * as ProductActions from '../../store/modules/products/actions';

const Header = () => {

    const dispatch = useDispatch();

    const onChangeSearch = function(text){
        if (history.location.pathname !== '/'){
            history.replace('/');
        }

        dispatch(ProductActions.searchProducts(text));
    }

    const amountProducts = useSelector(state => state.cart.reduce((accumulate, cartData) => {
        return accumulate + cartData.amount;
    }, 0));

    useEffect(function(){
        dispatch(ProductActions.searchProducts(''));
    }, []);

    return (
        <Container>
            <Link to="/">
                <img src={logo} width="auto" height="35px" alt="Shopping++" />
            </Link>

            <WrapperData flex={1} maxToColumn={650}>
                <InputSearch onChange={onChangeSearch} />

                <WrapperData>
                    <WrapperAvatar maxToColumn={650}>
                        <FaUserCircle size={35} color="#FFF"/>
                        <InforUser>
                            <label>Olá Filipe!</label>
                            <span>Minha conta</span>
                        </InforUser>
                    </WrapperAvatar>

                    <WrapperData flex={1} justifyContent='flex-end'>
                        <Cart to="/cart">
                            <div>
                                <strong>Meu Carrinho</strong>
                                <span>{amountProducts} itens</span>
                            </div>
                            <FiShoppingCart size={35} color="#FFF" />
                        </Cart>
                    </WrapperData>
                </WrapperData>
            </WrapperData>
        </Container>
    );
}

export default Header;