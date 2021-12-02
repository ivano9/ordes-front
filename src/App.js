import './App.css';
// import OrderListWrapper from './components/orders-list/OrderListWrapper'
import Orders from './components/Orders/Orders'
import Home from './components/Home/Home'
import React from "react";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";

const App = () =>
    <Router>
        <Routes>
          <Route path="/orders" element={<Orders />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </Router>


export default App;
