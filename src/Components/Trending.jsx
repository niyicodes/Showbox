"use client";
import { useState, useEffect } from "react";
import Card from "./Card";

const Trending = () => {
 const [isActive, setIsActive] = useState(true);
 const [buttonValue, setButtonValue] = useState("day");
 const [trending, setTrending] = useState([]);

 const getTrending = async () => {
  if (buttonValue) {
   const api = await fetch(
    `https://api.themoviedb.org/3/trending/all/${buttonValue}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const res = await api.json();
   const data = res.results;
   setTrending(data);
  }
 };

 const handleClick = (value) => {
  setActive();
  setButtonValue(value);
 };

 const setActive = () => {
  setIsActive(!isActive);
 };

 useEffect(() => {
  getTrending();
 }, [isActive, buttonValue]);

 return (
  <section className="my-8 sm:mx-10">
   <div className="flex gap-8 items-center">
    <h3 className="text-3xl font-semibold">Trending</h3>
    <ul className="text-lg flex gap-4 border-2  text-san-marino-950 rounded-full overflow-hidden">
     <button
      id="button1"
      value={"day"}
      className={`px-4 py-1 rounded-full ${
       isActive
        ? "bg-san-marino-800 text-white"
        : " text-san-marino-900 font-medium"
      }`}
      onClick={() => handleClick("day")}
     >
      Today
     </button>
     <button
      id="button2"
      value={"week"}
      className={`px-4 py-1 rounded-full ${
       isActive
        ? "text-san-marino-900 font-medium"
        : "bg-san-marino-800 text-white"
      }`}
      onClick={() => handleClick("week")}
     >
      This Week
     </button>
    </ul>
   </div>
   <div className="scroll my-8 grid grid-flow-col gap-4 overflow-x-scroll">
    {trending.map((trend) => {
     return (
      <Card
       key={trend.id}
       name={trend.name}
       vote_average={trend.vote_average}
       poster_path={trend.poster_path}
       first_air_date={trend.first_air_date}
       title={trend.title}
       release_date={trend.release_date}
       id={trend.id}
       media_type={trend.media_type}
      />
     );
    })}
   </div>
  </section>
 );
};

export default Trending;
