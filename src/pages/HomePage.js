import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Now playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
