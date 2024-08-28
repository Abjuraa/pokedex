import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Items from './pages/Items';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/pokemons' element={< Pokemons />} />
        <Route path='/pokemons/:name' element={< Pokemon />} />
        <Route path='/items' element={< Items />} />
        <Route path='/' element={< Pokemons />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
