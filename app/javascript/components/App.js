import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store';
import Greeting  from './Greeting';

const App = () =>  {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
