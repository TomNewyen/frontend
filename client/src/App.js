import React from 'react';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
<Router>
  <Routes>
    
    <Route path='/' exact element={<Homepage />}/>
    <Route path='/productpage/:category' element={<ProductPage/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

  </Routes>

</Router>
 

    );
}

export default App;