import React from 'react';
import { Container } from './styles';

const Button = (props) => {
    return (
        <Container>
            <button type="button" onClick={props.onClick}>
                {props.text}
            </button>
        </Container>
    )
}

export default Button;