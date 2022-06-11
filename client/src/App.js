import React from 'react';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import  Success from './pages/Success'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser)
    return (
<Router>
  <Routes>
    
    <Route path='/' exact element={<Homepage />}/>
    <Route path='/productpage/:category' element={<ProductPage/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>

    <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> 
    <Route path='/register' element={<Register/>}/>
    
    <Route path="/success" element={<Success/>}/>
  </Routes>

</Router>
 

    );
}

export default App;