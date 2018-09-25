import * as React from 'react';

import { createBrowserHistory} from 'history'
import { Router, Route } from 'react-router';

import Customer from './components/Customers';
import Order from './components/Orders';
import Products from './components/Products';


const browserHistory = createBrowserHistory();

export class App extends React.Component {

  
  public render() {
    return (
      <div>
      <p> Welcome to React </p>
          <Products />
<Router history={browserHistory}>
<div>
          <Route path="/" component = {Products} />
          <Route path="/Customer/" component = {Customer} />
          <Route path="/Order/" component = {Order} />
          </div>
</Router>

      </div>
    );
  }
}

export default App;
