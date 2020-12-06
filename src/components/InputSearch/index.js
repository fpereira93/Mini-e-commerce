import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, WrapperIcon } from './styles';

export default function InputSearch(props) {
    return (
        <Container>
            <input type="text" onChange={e => props.onChange(e.target.value)} maxLength="200" />

            <WrapperIcon>
                <MdSearch size={30} color="#FFF" />
            </WrapperIcon>
        </Container>
    )
}