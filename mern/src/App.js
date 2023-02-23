import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import CreateMovie from './CreateMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Movies</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="Movie">Peliculas</a>
              <a class="nav-item nav-link" href="Createmovie">Crear Pelicula</a>
            </div>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie/>} exact />
          <Route path="/addmovie" element={<CreateMovie/>} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
