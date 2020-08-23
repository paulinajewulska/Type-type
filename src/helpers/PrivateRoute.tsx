import React, { ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: any;
    authed: boolean;
}

const PrivateRoute = (props: PrivateRouteProps): ReactElement => {
    const { component: Component, authed, ...rest } = props;

    return (
        <Route {...rest}
            render={props => (
                authed ? <Component {...props} /> : <Redirect to="/login" />
            )}
        />);
};

export default PrivateRoute;