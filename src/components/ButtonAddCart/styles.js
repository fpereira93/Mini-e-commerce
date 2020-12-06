import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    button {
        cursor: pointer;
        background: #282120;
        color: #fff;
        border: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        transition: background 0.2s;
        margin-top: 10px;
    
        &:hover {
            background: ${darken(0.05, '#282120')};
        }
    
        div {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.4);
            border-right: 1px solid #464646;

            svg {
                margin-right: 5px;
            }
        }
    
        span {
            flex: 1;
            text-align: center;
            font-weight: bold;
        }
    }
`