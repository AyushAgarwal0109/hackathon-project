import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import NavbarMain from './components/layout/NavbarMain';
import AboutMain from './components/layout/About';
import Contact from './components/layout/ContactUs';
import Schemes from './components/layout/Schemes';
import Donate from './components/layout/Donate';
import Banner from '../../client/src/components/layout/Banner';
import Testimonials from './components/layout/Testimonials';
import Finance from '../../client/src/components/pages/FinanceHelp';
import News from './components/layout/Newsletter';

import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Categories from './components/pages/Categories';
import Shgroups from './components/pages/Shgroups';
import Settings from './components/pages/Settings';
import GroupInfo from './components/pages/GroupInfo';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <>
      <AuthState>
        <Router>
          <Fragment className='App'>
            {/* <Navbar /> */}
            <div>
              <Switch>
                <PrivateRoute exact path='/home'>
                  <Home />
                </PrivateRoute>
                <PrivateRoute exact path='/categories'>
                  <Categories />
                </PrivateRoute>
                <PrivateRoute exact path='/shgroups'>
                  <Shgroups />
                </PrivateRoute>
                <PrivateRoute exact path='/financehelp'>
                  <Finance />
                </PrivateRoute>
                <PrivateRoute exact path='/settings'>
                  <Settings />
                </PrivateRoute>
                <Route exact path='/'>
                  <NavbarMain />
                  <Banner />
                  <AboutMain />
                  <Schemes />
                  <Donate />
                  { /* <News /> */}
                  <Testimonials />
                  <Contact /> 

                </Route>
                <Route exact path='/register'>
                  <NavbarMain />
                  <Register />
                </Route>
                <Route exact path='/login'>
                  <NavbarMain />
                  <Login />
                </Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AuthState>
    </>
  );
};

export default App;
