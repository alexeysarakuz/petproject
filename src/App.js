import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './base/main.sass';

import Navigation from './components/utils/navigation/navigation';
import Footer from './components/utils/footer/footer';

import MainPage from './components/pages/mainPage/mainPage';
import ItemPage from './components/pages/itemPage/itemPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" component={MainPage} exact />
        <Route path="/item/:id" component={ItemPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
