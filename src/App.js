import './App.css';
import Nav from './Nav'
import Details from './details'
import {BrowserRouter as Router} from 'react-router-dom' ;

function App() {
  return (
    <Router>
    
    <div className="App">

      <Nav/>
    <p>here are some very important things happening</p>
    </div>
    <Details/>
      </Router>
  );
}

export default App;
