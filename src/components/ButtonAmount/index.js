import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

const ButtonAmount = (props) => {
    const decrement = () => {
        const value = props.value - 1;

        if (value >= (props.min ?? 0)){
            props.onChange(value);
        }
    }

    const increment = () => {
        const value = props.value + 1;

        if ((props.max !== undefined && value <= props.max) || !props.max){
            props.onChange(value);
        }
    }

    return (
        <Container>
            { !props.hideTitle ? <span>Quantidade</span> : null }

            <div>
                <button type="button" onClick={decrement} >
                    <MdRemoveCircleOutline size={20} color="#282120" />
                </button>
                <input type="number" readOnly value={props.value} />
                <button type="button" onClick={increment} >
                    <MdAddCircleOutline size={20} color="#282120" />
                </button>
            </div>
        </Container>
    )
}

export default ButtonAmount;