import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="pb-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full max-w-[800px] mx-auto h-[500px] relative -mt-[250px] pb-10 z-10">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
      </div>
      <h1 className="text-center font-bold text-4xl text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="cursor-pointer py-2 px-4 border border-primary text-primary rounded-md"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[700px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MoiveVideos></MoiveVideos>
    </div>
  );
};

// list casts
function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;

  return (
    <div className="p-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast &&
          cast.length > 0 &&
          cast.slice(0,4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                className="w-full h-[350px] rounded object-cover mb-3"
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                alt=""
              />
              <h3 className="text-xl font-medium">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

function MoiveVideos(){
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;

  return (
    <div className=""></div>
  )
}
export default MovieDetailPage;
