import Container from "react-bootstrap/esm/Container";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  //save data in useState
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)

  //get all data from api
  const AllData = async () => {

    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d03c27a18ff30cc637a8177deaf68098&language=ar-US&")
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);

  }



  //filter data from pagination bar 
  const GetPages = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d03c27a18ff30cc637a8177deaf68098&language=ar-US&page=${page}`)
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);

  }

  // search bar
  const SearchMovie = async (word) => {
    if (word === "") {
      AllData()
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d03c27a18ff30cc637a8177deaf68098&query=${word}&language=ar-US`)
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  }

  useEffect(() => {
    AllData();
  }, [])






  return (
    <div className="App">

      <NavBar SearchMovie={SearchMovie} />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} GetPages={GetPages} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>

      </Container>
    </div>
  );
}

export default App;
