import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = "https://api.themoviedb.org/3/search/multi";

const search = () => {
 const router = useRouter();
 
 const [searchResults, setSearchResults] = useState([]);

 async function search(query) {
  const response = await fetch(`${API_URL}?query=${query}&api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data)
  setSearchResults(data.results);
 }

 useEffect(() => {
  const query = router.query.q;
  console.log(query)
  if (query) {
   search(query);
  }
 }, [router.query]);

 return (
  <div>
   {searchResults.map((result) => (
    <div key={result.id}>
     <h2>{result.title || result.name}</h2>
     <p>{result.overview}</p>
    </div>
   ))}
  </div>
 );
};

export default search;
