import React, { FC, ReactElement } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { string, object } from 'yup';
import { Button } from '../components/Button';
import { Input } from '../styles/Form.styles';
import { Paragraph } from '../styles/Typography.styles';
import { history } from '../helpers/history';

const connectionString = process.env.SERVER_CONNECTION;

interface FormValues {
    email: string;
    password: string;
}

const LoginForm: FC = (): ReactElement => {
    const initialValues: FormValues = { email: '', password: '' };
    let doesntExistsError: boolean = false;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={object({
                email: string()
                    .email('Invalid email address')
                    .required('Required'),
                    password: string()
                    .min(8, 'Must be 8 characters or more')
                    .required('Required'),
            })}
            onSubmit={async (values) => {
                const response: (Response | void) = await fetch(`${connectionString}/login`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).catch(error => console.error("Error:", error));
                
                if (response && response.status === 200) {
                    const token: (string | null) = response.headers.get('auth-token');
                    if(token !== null) {
                        sessionStorage.setItem('token', token);
                        history.push("/");
                        window.location.reload();
                        doesntExistsError = false;
                    } else {
                        doesntExistsError = true;
                    }
                } else {
                    doesntExistsError = true;
                }
        }}
        >
            {props => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Input name="email" type="email" onChange={props.handleChange} />
                    <ErrorMessage name="email" />
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="password" onChange={props.handleChange} />
                    <ErrorMessage name="password" />
                    {doesntExistsError && <Paragraph>User does not exists :(</Paragraph>}
                    <Button text="Sign in"></Button>
                </Form>)}
        </Formik>
    );
};

export { LoginForm };