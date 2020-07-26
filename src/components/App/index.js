import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Menu from '../Menu';
import Commander from '../Commander';
import Find from '../Find';
import Footer from '../Footer';
import './styles.scss';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
      <div className="App">
        <Header 
          isActive={isActive}
          setIsActive={setIsActive}
        />
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
};

export default App;
