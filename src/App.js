import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './pages/Products';
import Cart from './pages/Cart';
import RedirectPage from './pages/RedirectPage';
import CartState from './context/cart/CartState';

function App() {
  return (
    <CartState>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/404" component={RedirectPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartState>
  );
}

export default App;
