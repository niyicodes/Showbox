"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchArea = () => {
 const router = useRouter();

 const [Query, setQuery] = useState("");

 const handleChange = (e) => {
  setQuery(e.target.value);
 };


 const handleSearch = (e) => {
  e.preventDefault();
  
  router.push({
   pathname: '/search',
   query:{q: Query},
  })
 };

 return (
  <main
   style={{
    backgroundImage: "url('https://source.unsplash.com/random/?tvshows')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // width: "100vw",
    // height: "100vh",
   }}
   className="h-auto text-left text-white xs:py-8 sm:py-14 lg:py-20 xs:px-3 sm:px-10 backdrop-blur-3xl bg-san-marino-800 bg-blend-overlay"
  >
   <div className="mb-4">
    <h3 className="mb-4 font-bold text-4xl sm:text-5xl">Welcome to SHOWBOX</h3>
    <p className="font-medium text-2xl sm:text-3xl">
     Millions of movies, TV shows and people to discover. Explore now.
    </p>
   </div>
   <div className="relative overflow-hidden">
    <input
     type="search"
     name="search"
     id="search"
     placeholder="Search for a movie, tvshow, person, etc..."
     className="w-full xs:py-2 sm:py-4 xs:px-5 sm:px-7 rounded-3xl text-san-marino-900 outline-0 xs:text-lg sm:text-2xl overflow-hidden"
     value={Query}
     onChange={handleChange}
    />
    <button
     type="submit"
     className="xs:text-base sm:text-xl absolute -right-1 text-white top-0 bg-san-marino-400 rounded-r-3xl xs:p-3 sm:p-5 h-auto" onClick={handleSearch}
    >
     Search
    </button>
   </div>
  </main>
 );
};

export default SearchArea;
