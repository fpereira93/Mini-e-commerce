import styled from 'styled-components';
import {Container as ContainerButtonAdd} from '../../components/ButtonAddCart/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;

    ${ContainerButtonAdd} {
        justify-content: flex-end;
    }
`

export const WrapperImage = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #bfbfbf;
    margin-bottom: 10px;
    cursor: pointer;

    img {
        object-fit: contain;
    }
`

export const WrapperInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    > label {
        font-size: 14px;
        font-weight: 500;
    }

    > span {
        margin-top: 5px;
        font-weight: bold;
        font-size: 1.428rem;
    }
`