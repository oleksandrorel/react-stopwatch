import React from 'react';
import { Stopwatch } from './components/Stopwatch';
import './App.scss';
import './helpers/reset.scss';

const App = () => (
  <div className="App">
    <main className="Main">
      <Stopwatch />
    </main>
  </div>
);

export default App;