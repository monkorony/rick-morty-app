import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Characters from './pages/Characters';
import Nav from './components/Nav/Nav';
import Episodes from './pages/Episodes';
import Location from './pages/Location';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardDetails from './components/Cards/CardDetails/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/:id' element={<CardDetails />} />
        
        <Route path='/episodes/' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />

        <Route path='/location/' element={<Location />} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
    </Router>
    
  );
}

export default App;
