import styled from 'styled-components';
import {Container as ContainerButtonAmount} from '../../components/ButtonAmount/styles';
import {Container as ContainerButton} from '../../components/Button/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px;

    > div:not(:last-child) {
        display: flex;
        flex-direction: row;
        padding: 10px 20px 10px 20px;
        border-bottom: 1px solid #c7c7c7;

        @media(max-width: 870px){
            padding: 10px;
        }

        @media(max-width: 360px){
            flex-direction: column;
        }

        img {
            max-width: 110px;
            object-fit: contain
        }
    }
`

export const WrapperImage = styled.div`
    margin-right: 30px;
    display: flex;

    @media(max-width: 360px){
        margin-right: 0px;
        justify-content: center;
    }
`

export const WrapperExtraData = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    @media(max-width: 870px){
        flex-direction: column;
    }

    > div:nth-child(1) {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        label {
            color: rgba(0,0,0,0.8);
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.18;
            padding-right: 10px;
            word-break: break-word;

            @media(max-width: 360px){
                padding-right: 0px;
            }
        }

        span {
            font-size: 1.71rem;
            color: #5a5a5a;
            font-weight: 300;
        }
    }

    > div:nth-child(2) {
        display: flex;
        flex: 1;
        flex-direction: row;

        ${ContainerButtonAmount} {
            flex: 1;
            display: flex;
            justify-content: center;
            margin-right: 15px;
        }

        @media(max-width: 510px){
            flex-direction: column;

            ${ContainerButtonAmount} {
                margin: 10px 0px 10px -5px;
            }
        }

        @media(max-width: 870px){
            ${ContainerButtonAmount} {
                align-items: flex-start;
            }
        }

        > div:nth-child(2) {
            justify-content: flex-end;

            > div:nth-child(1) {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-weight: 500;
                font-size: 1.36rem;
                margin-right: 15px;
                flex: 1;
                justify-content: center;

                @media(max-width: 510px){
                    justify-content: flex-start;
                }
            }

            > div:nth-child(2) {
                display: flex;

                button {
                    background: none;
                    border: 0;
                    cursor: pointer;
                }
            }
        }
    }
`

export const WrapperFooter = styled.div`
    display: flex;
    flex: 1;
    margin-top: 15px;

    ${ContainerButton} {
        flex: 1;
    }

    @media(max-width: 385px){
        flex-direction: column-reverse;

        ${ContainerButton} {
            margin-top: 10px;
        }
    }

    > div {
        align-self: center;

        span {
            color: #999;
            font-weight: bold;
        }

        strong {
            font-size: 2rem;
            margin-left: 5px;
        }
    }
`