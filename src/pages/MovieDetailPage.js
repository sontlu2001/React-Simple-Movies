import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=9b3a625c85535b4f9746c7e67e91eff1`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres,overview } = data;

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
      <h1 className="text-center font-bold text-3xl text-white mb-10">
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
    <p className="text-center leading-relaxed max-w-[700px] mx-auto">{overview}</p>
    </div>
  );
};

export default MovieDetailPage;
