import React, { FC, ReactElement } from 'react';
import { LoginForm } from '../containers/LoginForm';
import { Title, Paragraph, A } from '../styles/Typography.styles';
import { Section, Wrapper } from '../styles/Basic.styles';

const Login: FC = (): ReactElement => {
    return (
        <Section>
            <Wrapper>
                <Title>Hello hello</Title>
                <LoginForm />
                <Paragraph>Dont have an account? <A href="/register">Create</A></Paragraph>
            </Wrapper>
        </Section>
    );
}

export { Login };
