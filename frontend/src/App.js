import React from 'react';
import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

export const history = createBrowserHistory();
const App = () => {
  return (
    <Router history={history}>
      <Header />
      <main>
        <Container>
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/cart/:id?" exact component={CartScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
