import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container as ContainerSearch} from '../InputSearch/styles'

export const WrapperData = styled.div`
    display: flex;
    flex-direction: row;
    flex: ${props => props.flex ?? '"initial"'};
    align-items: center;
    justify-content: ${props => props.justifyContent ?? '"normal"'};

    @media(max-width: ${props => props.maxToColumn}px){
        flex-direction: column;
        align-items: normal;
    }
`

export const Container = styled.header`
    display: flex;
    align-items: center;
    margin: 50px 0;

    ${ContainerSearch} {
        margin-left: 20px;
        margin-right: 20px;
    }

    @media(max-width: 1000px){
        flex-direction: column;
        align-items: normal;

        img {
            width: 100%;
        }

        ${ContainerSearch} {
            margin-left: 0px;
            margin-right: 0px;
        }

        & > ${WrapperData} {
            margin-top: 10px;
        }
    }
`;

export const InforUser = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin: 5px;

    label {
        font-size: 1.4rem;
    }

    span {
        margin-top: 5px;
        font-size: 0.9rem;
    }
`

export const WrapperAvatar = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;

    @media(max-width: ${props => props.maxToColumn}px){
        margin-left: 0px;
    }
`

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    @media(max-width: 420px){
        margin-top: 5px;
    }

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 10px;
    }

    strong {
        display: block; 
        color: #fff;
        font-size: 1rem;
    }

    span {
        font-size: 0.85rem;
        color: #999;
    }
`;
