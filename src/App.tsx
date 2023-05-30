import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import React from 'react';
import Navigation from './components/Navigation';
import RouteView from './components/RouteView';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RouteView />
      </BrowserRouter>
    </div>
  );
}

export default App;
