import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//components//
import Header from './components/header/header';

//pages///
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/shop';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
