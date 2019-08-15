import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/App.css';
import './css/Common.css';
import { ContextProvider } from './globalState/state';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import WeeklySales from './components/sales/WeeklySales';
import OrderOnline from './components/online/OrderOnline';
import BrowseProducts from './components/products/BrowseProducts';
import NotFound from './components/common/NotFound';
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weekly-sales" component={WeeklySales} />
          <Route exact path="/order-online" component={OrderOnline} />
          <Route exact path="/brose-products" component={BrowseProducts} />
          <Route exact path="/weekly-sales/:slug/" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
