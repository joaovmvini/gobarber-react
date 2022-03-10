import React from 'react';
import logoImg from '../../assets/logo.svg';

import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
        <Background />

        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu Cadastro</h1>

                <Input name="username" icon={FiUser} placeholder='Username' />
                <Input name="email" icon={FiMail} placeholder="Email" type="email" />
                <Input name="password" icon={FiLock} placeholder="Password" type="password" />

                <Button type="submit">Cadastrar</Button>
            </form>
            
            <a href="login">
                <FiArrowLeft />
                Voltar para Login
            </a>

        </Content>
    </Container>
)

export default SignUp;