import React, { useState } from 'react'

const API_KEY = 'c89425fda98c3c3b8d5707c051751162'


const Search = () => {
    const [query, setQuery] = useState('');

    //state for movies, and update that state
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => { 
        e.preventDefault();
    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

      
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <input 
            className="input" 
            type="text" 
            name="query"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
        </form>
        </>
    )
}

export default Search
