import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Product from './components/pages/products';

import './Assets/css/styles.min.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
          <Route exact path='/' component ={Homepage} />
          <Route exact path='/Product' component ={Product} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
