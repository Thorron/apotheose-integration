import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Menu from '../Menu';
import Commander from '../Commander';
import Find from '../Find';
import Footer from '../Footer';
import './styles.scss';

const App = () => (
    <div className="App">
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/commander">
          <Commander />
        </Route>
        <Route exact path="/nous-trouver">
          <Find />
        </Route>
      <Footer />
    </div>
);

export default App;
