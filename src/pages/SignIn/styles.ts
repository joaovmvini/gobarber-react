import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png';

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

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
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