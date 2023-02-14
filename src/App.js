import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header mb-5 py-10 flex items-center justify-center gap-x-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <section className="banner h-[500px] mb-10 page-container">
        <div className="relative w-full h-full rounded-lg bg-white">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-1"></div>
          <img
            className="w-full h-full object-cover rounded-lg "
            src="https://cdnimg.vietnamplus.vn/uploaded/zatmzy/2019_06_12/avengersendgame2904.jpg"
            alt=""
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-3">Avenger: Endgame</h2>
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
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Now playing</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://cdnimg.vietnamplus.vn/uploaded/zatmzy/2019_06_12/avengersendgame2904.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-3 font-bold text-xl">
              Spiderman: Homecoming
            </h3>
            <div className="mb-10 flex items-center justify-between text-sm opacity-50 ">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Top rated</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://cdnimg.vietnamplus.vn/uploaded/zatmzy/2019_06_12/avengersendgame2904.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-3 font-bold text-xl">
              Spiderman: Homecoming
            </h3>
            <div className="mb-10 flex items-center justify-between text-sm opacity-50 ">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout pb-20 page-container text-white">
        <h2 className="capitalize mb-10 text-3xl font-bold">Trending</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://cdnimg.vietnamplus.vn/uploaded/zatmzy/2019_06_12/avengersendgame2904.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-3 font-bold text-xl">
              Spiderman: Homecoming
            </h3>
            <div className="mb-10 flex items-center justify-between text-sm opacity-50 ">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
