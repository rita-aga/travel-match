import React from 'react';
import logo from './logo.svg';
import { Counter } from './containers/counter/Counter';
import './App.scss';
import QueryResult from './hoc/ApolloClient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <QueryResult />
      </header>
    </div>
  );
}

export default App;
