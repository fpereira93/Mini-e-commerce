import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 1rem;
        margin-bottom: 4px;
        font-weight: 700;
    }

    > div {
        display: flex;
        flex-direction: row;

        button {
            background: none;
            border: 0;
            padding: 6px;
            display: flex;
            cursor: pointer;
        }
    
        input {
            border: 1px solid #ddd;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }
`
