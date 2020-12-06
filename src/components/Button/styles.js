import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    button {
        cursor: pointer;
        background: #282120;
        color: #fff;
        border: 0;
        transition: background 0.2s;
        padding: 15px 20px 15px 20px;

        &:hover {
            background: ${darken(0.05, '#282120')};
        }
    }
`
