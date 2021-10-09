import './App.css';
import NavBar from './Components/NavBar/NavBar'
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import ProductGrid from './Components/ProductGrid/ProductGrid'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'
import SignIn from './Pages/SignIn';
import { useEffect } from 'react';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    console.log(token)
    if(token && token!==''){
      dispatch({
        type: actionTypes.SET_USER,
        user: token.substring(0,4)
      })
    }
  }, [dispatch, user])

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/products" exact component={ProductGrid}/>
        <Route path="/checkout" exact component={CheckoutPage}/>
        <Route path="/signin" exact component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
