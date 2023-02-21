import React,{ useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";

const MovieList = ({type="now_playing"}) => {
  const { data } = useSWR(
    tmdbAPI.getMovieList(type),
    fetcher
  );
  const movies = data?.results || [];

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
