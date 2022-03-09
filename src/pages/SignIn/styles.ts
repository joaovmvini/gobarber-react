import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png';

import { shade } from 'polished';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    
    width: 100%;
    max-width: 700px;

    form {
        margin: 40px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            color: #f4ede8;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 8px;
            }

            &::placeholder {
                color: #666360;
            }
        }

        button {
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight:bold;
            margin-top: 16px;

            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#ff9000')};
            }

            & + a {
                color: #f4ede8;
                display: block;
                margin-top: 24px;
                text-decoration: none;
            }
        }

    }

    > a {
            color: #ff9000;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            display: flex;
            align-items:center ;

            svg {
                margin-right: 16px;
            }
        }
`;

export { Container, Content, Background };