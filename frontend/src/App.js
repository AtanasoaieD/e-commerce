import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';
const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/products/:id" element={<ProductScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
