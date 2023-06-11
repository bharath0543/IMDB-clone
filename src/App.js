import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './component/header/Header';
import Home from './pages/home/home';
import React,{ useEffect } from 'react';
import MovieList from './component/movielist/movielist';
import Movie from './pages/moviedetail/detail';


function App() {

  

    return (
    <div className="App">
             
      <Router>
      <Header/> 

        <Routes>
          <Route index element={<Home/>}></Route>
          <Route   path="movie/:id" element={<Movie/>}></Route>
          <Route   path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>

        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
