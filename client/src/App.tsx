import * as React from 'react';

import { createBrowserHistory} from 'history'
import { Router, Route, Link } from 'react-router-dom';

import Customer from './components/Customers';
import Order from './components/Orders';
import Products from './components/Products';


const browserHistory = createBrowserHistory();

export class App extends React.Component {

  
  public render() {
    return (
      <div>
      <p> Welcome to React </p>
<Router history={browserHistory}>
<div>
  <ul>
    <li className ="topnav" > <Link to={'/'}> Outstanding Bills </Link> </li>
    <li> <Link to={'/Customer'}> Payments </Link> </li>
    <li> <Link to={'/Order'}> Rate Set Rollover </Link> </li>
  </ul>
  <hr />
          <Route path="/" component = {Products} />
          <Route path="/Customer" component = {Customer}/> 
          <Route path="/Order" component = {Order}/> 
          </div>
</Router>

      </div>
    );
  }
}

export default App;
