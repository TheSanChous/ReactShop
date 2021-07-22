import { React} from 'react';
import HeadNavbar from './component/Navbar/HeadNavbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsContext } from './context/Products/ProductsContext';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="container shadow-sm mw-100 p-1">
      <Router>
        <ProductsContext>
          <HeadNavbar/>
          <Switch>
            <Route path="/" exact>
              <Shop/>
            </Route>
            <Route path="/basket" exact>
            </Route>
            <Route path="/about" exact>
            </Route>
          </Switch>
        </ProductsContext>
      </Router>
    </div>
  );
}

export default App;
