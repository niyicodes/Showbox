"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "./Card";

const Popular = () => {
 const [isActive, setIsActive] = useState(1);
 const [popular, setPopular] = useState([]);
 const [buttonValue, setButtonValue] = useState("upcoming");

 const getPopular = async () => {
  if (buttonValue === "upcoming") {
   const api = await fetch(
    `https://api.themoviedb.org/3/movie/${buttonValue}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const res = await api.json();
   const data = res.results;
   setPopular(data);
  } else if (buttonValue === "popular") {
   const api = await fetch(
    `https://api.themoviedb.org/3/tv/${buttonValue}?api_key=6c4adaf3a193f12cfd3623a7feb6ea33`
   );
   const res = await api.json();
   const data = res.results;
   setPopular(data);
  } else if (buttonValue === "top_rated") {
   const api = await fetch(
    `https://api.themoviedb.org/3/tv/${buttonValue}?api_key=6c4adaf3a193f12cfd3623a7feb6ea33`
   );
   const res = await api.json();
   const data = res.results;
   setPopular(data);
  } else if (buttonValue === "now_playing") {
   const api = await fetch(
    `https://api.themoviedb.org/3/movie/${buttonValue}?api_key=6c4adaf3a193f12cfd3623a7feb6ea33`
   );
   const res = await api.json();
   const data = res.results;
   setPopular(data);
  }
 };

 const handleClick = (value, buttonNumber) => {
  setActive(buttonNumber);
  setButtonValue(value);
  console.log(buttonNumber);
 };

 const setActive = (buttonNumber) => {
  setIsActive(buttonNumber);
 };

 useEffect(() => {
  getPopular();
 }, [isActive, buttonValue]);
 return (
  <motion.section
   className="my-8 sm:mx-10"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
  >
   <div className="flex xs:flex-col sm:flex-row gap-8 items-center">
    <h3 className="text-3xl font-semibold">What's Popular</h3>
    <ul className="xs:text-[13px] xs:mx-2 sm:mx-0 sm:text-lg flex xs:gap-2 sm:gap-4 border-2  text-san-marino-950 rounded-full overflow-hidden">
     <button
      id="button1"
      className={`px-4 py-1 rounded-full ${
       isActive === 1
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("upcoming", 1)}
     >
      UpComing
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 2
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("popular", 2)}
     >
      Popular
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 3
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("top_rated", 3)}
     >
      Top Rated
     </button>
     <button
      id="button2"
      className={`px-4 py-1 rounded-full ${
       isActive === 4
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("now_playing", 4)}
     >
      In Theaters
     </button>
    </ul>
   </div>
   <div className="scroll my-8 grid grid-flow-col gap-4 overflow-x-scroll">
    {popular.map((popu) => {
     return (
      <Card
       key={popu.id}
       name={popu.name}
       vote_average={popu.vote_average}
       poster_path={popu.poster_path}
       first_air_date={popu.first_air_date}
       title={popu.title}
       release_date={popu.release_date}
       id={popu.id}
       media_type={popu.media_type}
      />
     );
    })}
   </div>
  </motion.section>
 );
};

export default Popular;
