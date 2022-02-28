import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//components//
import Header from './components/header/header';
import {auth} from './firebase/firebase.utils';

//pages///
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/shop';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()  {
    return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndUpPage}/>
    </Switch>
  </div>
)}


  
}

export default App;
