import styled, { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #E6C2BF url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;
    }

    html, body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    #root {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    @media(max-width: 1000px){
        html {
            font-size: 13px;
        }
    }

    @media(max-width: 650px){
        html {
            font-size: 12px;
        }
    }
`;


export const Flex = styled.div`
    display: flex;
    flex: ${props => props.number ?? 1};
    flex-direction: ${props => props.flexDirection ?? "'column'"};
`

export const NoResults = styled.div`
    font-size: 1.10rem;
    font-weight: 500;
    color: #898989;
    justify-content: center;
    display: flex;
    flex: 1;
    background-color: #fff;
    padding: 15px;
}
`