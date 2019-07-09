import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="john@gmail.com" phone="222-22-22"/>
    </div>
  );
}

export default App;
