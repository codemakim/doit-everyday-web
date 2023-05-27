import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import RouteView from './components/RouteView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <RouteView/>
      </BrowserRouter>
    </div>
  );
}

export default App;
