import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <header className="header mb-5 py-10 flex items-center justify-center gap-x-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <Banner></Banner>

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
}

export default App;
