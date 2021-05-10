import React, { useState } from 'react';
import "../styles/Search.css"
import VideoCard from '../components/VideoCard';
import FlipMove from "react-flip-move";
import Header from "../components/Header"
import '../styles/VideoCard.css';
import '../styles/Search.css';
import '../styles/Header.css';


const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

const Search = () => {

    const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function getMovies(API) { 
    fetch(API)
    .then((res) => res.json())
    .then((data) => { 
    setMovies(data.results);
  });
  }
  
    const handleOnSubmit = (e) => { 
      e.preventDefault();

      getMovies(SEARCH_API+searchTerm)
    setSearchTerm('');
    
    }

    const handleOnChange = (e) => { 
      setSearchTerm(e.target.value);
    }

  return (
    
    
    <div>
      <Header />
      <header>
        <form onSubmit={handleOnSubmit}>
   <div class="wrap">
   <div class="search">
      <input 
       className="searchTerm"
       type="text" 
       placeholder="Search for your favorite movie here! "
       value={searchTerm}
       onChange={handleOnChange}
       />
      
  
   </div>
</div>
        <div className="results">
        <FlipMove>
        {movies.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
       

      </div>
      </form>
      </header> 

    </div>
  );
    
}

export default Search
