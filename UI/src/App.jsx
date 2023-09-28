import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import IndividualProduct from './pages/IndividualProduct';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route exact path="/products/:category" element={ <ProductList/> }/>
        <Route exact path="/product/:id" element={ <IndividualProduct/> }/>
        <Route exact path="/cart" element={ <Cart/> }/>
        <Route exact path="/login" element={ user ? ( <Navigate to="/" replace /> ) : ( <Login /> )} />
        <Route exact path="/register" element={ user ? ( <Navigate to="/" replace /> ) : ( <Register /> )} />
      </Routes>
    </Router>
  );
};

export default App;
