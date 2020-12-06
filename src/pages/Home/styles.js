import styled from 'styled-components';
import { Container as ContainerProduct } from '../../components/CardProduct/styles'

export const Container = styled.div`
    display: flex;
    flex: 1;

    ${ContainerProduct} {
        margin-bottom: 20px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
`

export const ProductList = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
