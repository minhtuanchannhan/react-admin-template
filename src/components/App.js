import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import '../styles/style.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Layout
const Layout = Loadable({
  loader: () => import('./Layout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./Page/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./Page/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./Page/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./Page/Page500'),
  loading
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={Layout} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
