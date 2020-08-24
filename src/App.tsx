import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Homepage } from './pages/Homepage';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/" component={Homepage} authed={sessionStorage['token']} />
    </BrowserRouter>
  );
}

export default App;