import styled from 'styled-components';

const Container = styled.div`

    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    display: flex;
    align-items:center;

    input {
        color: #f4ede8;
        background: transparent;
        flex: 1;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }
    
    & + & {
        margin-top: 8px;
    }
        
    svg {
        margin-right: 16px;
        color: #666360;
    }
`;

export { Container }; 