import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios'
import "../styles/ContentModal.css"

import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "./Actors";
import Comments from "./Comments";

import { 
  img_500, 
  unavailable, 
  unavailableLandscape,
} from "./config"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "80%",
    height: "100%",
    backgroundColor: "#0a0a0acf",
    border: '2px solid #000',
    borderRadius: 10,
    color: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({children, movie}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => { 
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  }
  
  useEffect(() => {
    fetchData()
    fetchVideo()
  }, [])

  const fetchVideo = async () => { 
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    setVideo(data.results[0]?.key);
   
  }

  return (
    <div>
          <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="ContentModal">
            <img
                  src={
                    movie.poster_path
                      ? `${img_500}/${movie.poster_path}`
                      : unavailable
                  }
                  alt={movie.name || movie.title}
                  className="ContentModal__portrait"
                />

              <img
                  src={
                    movie.backdrop_path
                      ? `${img_500}/${movie.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={movie.name || movie.title}
                  className="ContentModal__landscape"
                />

                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {movie.name || movie.title} (
                        {(
                          movie.first_air_date ||
                          movie.release_date ||
                          "-----"
                        ).substring(0,4)}
                      )
                    </span>

                    {movie.tagline && (
                    <i className="tagline">{movie.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {movie.overview}
                  </span>
                  <div>
                    <Carousel movie={movie} />
                  </div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                  <div>
                  <Comments />
                  
            </div>
                  </div>     
          

            </div>
        
          </div>
        </Fade>
        
      </Modal>
     
    </div>
  );
}
