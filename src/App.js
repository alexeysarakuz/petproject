import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './base/main.sass';

import Navigation from './components/utils/navigation/navigation';
import Footer from './components/utils/footer/footer';

import MainPage from './components/pages/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" component={MainPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
