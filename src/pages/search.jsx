import SearchItem from "@/Components/SearchItem";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = "https://api.themoviedb.org/3/search/multi";

const search = () => {
 const router = useRouter();

 const [searchResults, setSearchResults] = useState([]);

 const [Query, setQuery] = useState("");
 const handleChange = (e) => {
  setQuery(e.target.value);
 };

 const handleSearch = (e) => {
  e.preventDefault();

  if (Query === "") {
   alert("Please kindly type in a word");
  } else {
   router.push({
    pathname: "/search",
    query: { q: Query },
   });
  }
 };

 async function search(query) {
  const response = await fetch(`${API_URL}?query=${query}&api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  setSearchResults(data.results);
 }

 useEffect(() => {
  const query = router.query.q;
  if (query) {
   search(query);
  }
 }, [router.query]);

 const imagePath = "https://image.tmdb.org/t/p/original";

 return (
  <motion.section
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
  >
   <div className="border-2 flex m-4 justify-between rounded-xl">
    <input
     type="search"
     name="search"
     id="search"
     placeholder="Search for a movie, tvshow, person, etc..."
     className="w-2/3 xs:py-2 sm:py-4 xs:px-5 sm:px-7 outline-0 rounded-3xl text-san-marino-900  xs:text-lg sm:text-2xl overflow-hidden"
     value={Query}
     onChange={handleChange}
    />
    <button
     type="submit"
     className="xs:text-base sm:text-xl  text-white bg-san-marino-400 rounded-xl p-3"
     onClick={handleSearch}
    >
     Search
    </button>
   </div>
   <div className="mx-4 my-7">
    {searchResults.map(
     ({
      name,
      title,
      overview,
      id,
      poster_path,
      media_type,
      known_for_department,
     }) => {
      if (media_type === "tv" || "movie") {
       return (
        <Link href={`/${id}`} key={id}>
         <SearchItem
          title={title || name}
          image={imagePath + poster_path}
          overview={overview}
         />
        </Link>
       );
      } else if (media_type === "person") {
       return (
        <SearchItem
         title={title || name}
         image={imagePath + poster_path}
         overview={known_for_department}
        />
       );
      }
     }
    )}
   </div>
  </motion.section>
 );
};

export default search;
