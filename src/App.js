import './App.css';
import NavBar from './Components/NavBar/NavBar'
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import ProductGrid from './Components/ProductGrid/ProductGrid'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'
/* import SideBar from './Components/SideBar/SideBar' */

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/products" exact component={ProductGrid}/>
        <Route path="/checkout" exact component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

export default App;
