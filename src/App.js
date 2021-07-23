import { React} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductsContext } from './context/Products/ProductsContext';
import { BasketContext } from './context/Basket/BasketContext';

import HeadNavbar from './component/Navbar/HeadNavbar';
import Shop from './component/Shop/Shop';
import Basket from './component/Basket/Basket';

function App() {
  return (
    <div className="container h-100 d-inline-block shadow-sm mw-100 p-1">
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
              </Route>
            </Switch>
          </BasketContext>
        </ProductsContext>
      </Router>
    </div>
  );
}

export default App;
