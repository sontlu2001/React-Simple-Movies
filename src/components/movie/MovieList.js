import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useState } from "react";
import { useEffect } from "react";

const MovieList = ({type="now_playing"}) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=9b3a625c85535b4f9746c7e67e91eff1`,
    fetcher
  );
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data && data.results){
        setMovies(data.results);
    } 
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 && movies.map(item => (
            <SwiperSlide key={item.id}>
          <MovieCard item={item}></MovieCard>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
