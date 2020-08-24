import React, { FC, ReactElement } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { string, object } from 'yup';
import { Button } from '../components/Button';
import { Input } from '../styles/Form.styles';
import { Paragraph } from '../styles/Typography.styles';

const connectionString = process.env.REACT_APP_SERVER_CONNECTION;

interface FormValues {
    username: string;
    email: string;
    password: string;
}

const RegisterForm: FC = (): ReactElement => {
    const initialValues: FormValues = { username: '', email: '', password: '' };
    let userExistsError: boolean = false;
    let successfulRegistration: boolean = false;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={object({
                username: string()
                    .min(4, 'Must be 4 characters or more')
                    .required('Required'),
                email: string()
                    .email('Invalid email address')
                    .required('Required'),
                password: string()
                    .min(8, 'Must be 8 characters or more')
                    .required('Required'),
            })}
            onSubmit={async (values) => {
                const response: (Response | void) = await fetch(`${connectionString}/register`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).catch(error => console.error("Error:", error));

                if (response && response.status === 200) {
                    successfulRegistration = true;
                    userExistsError = false;
                }
                if (response && response.status === 400) {
                    successfulRegistration = false;
                    userExistsError = true;
                }
            }}
        >
            {props => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Input name="username" type="text" onChange={props.handleChange} />
                    <ErrorMessage name="username" />
                    <label htmlFor="email">Email</label>
                    <Input name="email" type="email" onChange={props.handleChange} />
                    <ErrorMessage name="email" />
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="password" onChange={props.handleChange} />
                    <ErrorMessage name="password" />
                    {successfulRegistration && <Paragraph>User properly registered.</Paragraph>}
                    {userExistsError && <Paragraph>User already exists :(</Paragraph>}
                    <Button text="Sign up"></Button>
                </Form>)}
        </Formik>
    );
};

export { RegisterForm };