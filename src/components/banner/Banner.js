import React from "react";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    tmdbAPI.getMovieUpComing(),
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] mb-20 page-container overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path,id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg bg-white">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-1"></div>
      <img
        className="w-full h-full object-cover rounded-lg "
        src= {tmdbAPI.imageOriginal(poster_path)}
        alt=""
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <div className="flex item-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button onClick={()=> navigate(`/movie/${id}`)} widthFull={false}>Watch Now</Button>
      </div>
    </div>
  );
}
export default Banner;
