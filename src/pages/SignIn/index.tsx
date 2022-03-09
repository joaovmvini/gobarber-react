import React from 'react';
import logoImg from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu login</h1>

                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />

                <button type="submit">Entrar</button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            
            <a href="login">
                <FiLogIn />
                Criar conta
            </a>

        </Content>

        <Background />
    </Container>
)

export default SignIn;