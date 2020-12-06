import styled from 'styled-components';
import {Container as ContainerButtonAdd} from '../../components/ButtonAddCart/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;

    img {
        margin: 10px;
        object-fit: contain;
        margin-right: 30px;
    }

    @media(max-width: 805px){
        flex-direction: column;

        img {
            margin-right: 10px;
        }
    }
`

export const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex ?? '"initial"'};
`

export const WrapperDetails = styled(Wrapper)`
    border-left: 1px solid #cfcfcf;
`

export const DescribeProduct = styled(Wrapper)`
    margin-bottom: 20px;

    label {
        font-size: 1.43rem;
        border-bottom: 1px solid #c7c7c7;
        margin-bottom: 10px;
        padding-bottom: 2px;
        color: #5a5a5a;
    }

    div {
        text-align: justify;
        font-size: 1.07rem;
    }
`

export const InformationText = styled(Wrapper)`
    span {
        color: rgba(0, 0, 0, 0.45);
        font-size: 1rem;
        font-weight: 400;
    }

    label {
        color: rgba(0, 0, 0, 0.8);
        font-size: 1.57rem;
        font-weight: 600;
        line-height: 1.18;
        padding-right: 10px;
        word-break: break-word;
    }
`

export const InformationPrice = styled(Wrapper)`
    > label {
        font-size: 2.57rem;
        color: #5a5a5a;
        font-weight: 300;
    }

    > div {
        font-size: 0.87rem;

        label {
            font-size: 1rem;
            color: rgb(0, 166, 80);
        }
    }
`

export const WrapperActions = styled(Wrapper)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    ${ContainerButtonAdd} {
        max-width: 235px;
    }
`