import React, { forwardRef } from 'react'
import "../styles/VideoCard.css"
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons"
import ContentModal from './MovieDetails';

const base_url = "https://image.tmdb.org/t/p/original/";


const VideoCard = forwardRef(({ movie, media_type, id}, ref) =>  {

    return (
      <ContentModal movie={movie}>
        <div ref={ref} className="videoCard">
           {/* If the movie does not have a default photo, find another alternative that fits that movie. */}
          
           <img 
           src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
           alt="movie poster"
           />
            
        <TextTruncate
            line={1}
            element="p"
            truncateText="..."
            text={movie.overview}
         />

        {/* Either render the movie title or the movie original name */}
        <h2>{movie.title || movie.original_name}</h2>
        <p className="videoCard__stats">
            {movie.media_type && `${movie.media_type} •`}
            {movie.release_date || movie.first_air_date} • 
            <ThumbUpSharp />{" "}
            {movie.vote_count}</p>

        </div>
        </ContentModal>
            
    
  
    )
})

export default VideoCard
