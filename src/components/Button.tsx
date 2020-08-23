import React, { FC, ReactElement } from 'react';
import { FullButton } from '../styles/Basic.styles';

interface ButtonText {
    text?: string
}

const Button: FC<ButtonText> = ({ text = "Send" }): ReactElement => {
    return (<FullButton type="submit">{text}</FullButton>);
}

export { Button };
