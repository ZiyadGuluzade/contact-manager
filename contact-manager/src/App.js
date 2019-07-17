import React from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import Addcontact from './components/contacts/Addcontact';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <Addcontact/>
          <Contacts/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
