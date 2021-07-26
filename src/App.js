import { React} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductsContext } from './context/Products/ProductsContext';
import { BasketContext } from './context/Basket/BasketContext';

import HeadNavbar from './component/Navbar/HeadNavbar';
import Shop from './component/Shop/Shop';
import Basket from './component/Basket/Basket';
import About from './component/AboutPage/About';
import ProductPage from './component/Products/ProductPage';

function App(props) {
  return (
    <div className="container shadow-sm p-1">
      <Router>
        <ProductsContext>
          <BasketContext>
            <HeadNavbar/>
            <Switch>
              <Route path="/" exact>
                <Shop/>
              </Route>
              <Route path="/basket" exact>
                <Basket/>
              </Route>
              <Route path="/about" exact>
                <About/>
              </Route>
              <Route path="/product">
                <ProductPage/>
              </Route>
            </Switch>
          </BasketContext>
        </ProductsContext>
      </Router>
    </div>
  );
}

export default App;
