import React, { FC, ReactElement } from 'react';
import { RegisterForm } from '../containers/RegisterForm';
import { Title, Paragraph, A } from '../styles/Typography.styles';
import { Section, Wrapper } from '../styles/Basic.styles';

const Register: FC = (): ReactElement => {
    return (
        <Section>
            <Wrapper>
                <Title>Create account</Title>
                <RegisterForm />
                <Paragraph>Already have an account? <A href="/login">Log in</A></Paragraph>
            </Wrapper>
        </Section>
    );
}

export { Register };
