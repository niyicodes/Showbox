"use client";

import PageCard from "@/Components/PageCard";
import { useState, useEffect } from "react";

const movie = () => {
 const [isActive, setIsActive] = useState(1);
 const [movies, setMovies] = useState([]);
 const [buttonValue, setButtonValue] = useState("popular");

 const handleClick = (value, buttonNumber) => {
  setActive(buttonNumber);
  setButtonValue(value);
  console.log(buttonNumber);
 };

 const setActive = (buttonNumber) => {
  setIsActive(buttonNumber);
 };

 const getMovies = async () => {
  if (buttonValue) {
   const api = await fetch(
    `https://api.themoviedb.org/3/movie/${buttonValue}?api_key=6c4adaf3a193f12cfd3623a7feb6ea33`
   );
   const res = await api.json();
   const data = res.results;
   setMovies(data);
   console.log(buttonValue, data);
  }
 };

 useEffect(() => {
  getMovies();
 }, [buttonValue]);
 return (
  <main className="xs:mx-3 sm:mx-8">
   <nav className="flex justify-center my-3">
    <ul className="xs:text-base xs:mx-4 sm:mx-0 sm:text-lg xs:grid xs:grid-cols-2 sm:flex gap-4 sm:border-2  text-san-marino-950 rounded-full sm:overflow-hidden">
     <button
      id="button1"
      className={`px-4 py-1 rounded-full ${
       isActive === 1
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("popular", 1)}
     >
      Popular
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 2
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("now_playing", 2)}
     >
      Now Playing
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 3
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("upcoming", 3)}
     >
      Upcoming
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 4
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("top_rated", 4)}
     >
      Top Rated
     </button>
    </ul>
   </nav>

   <section className="movies mt-12 mb-8">
    <div className="genmovies grid xs:grid-cols-2 xs:justify-items-center sm:grid-cols-3 lg:grid-cols-4 xs:gap-2 sm:gap-4">
     {movies.length > 0
      ? movies.map((movie) => {
         return (
          <PageCard
           key={movie.id}
           name={movie.name}
           vote_average={movie.vote_average}
           poster_path={movie.poster_path}
           first_air_date={movie.first_air_date}
           title={movie.title}
           release_date={movie.release_date}
          />
         );
        })
      : null}
    </div>
   </section>
  </main>
 );
};

export default movie;
