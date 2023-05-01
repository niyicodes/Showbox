import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProgressCircle from "@/Components/ProgressCircle";

const detailsPage = () => {
 const [showMovie, setShowMovie] = useState([]);

 const router = useRouter();
 const { id } = router.query;

 const imagePath = "https://image.tmdb.org/t/p/original";
 const videoPath = "https://www.youtube.com/watch?v=";
 // console.log(id)
 const getMovieOrShow = async () => {
  const api = await fetch(
   `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos,aggregate_credits,external_ids,images,keywords,`
  );
  const res = await api.json();
  if (res.last_air_date) {
   setShowMovie(res);
   console.log(res);
  } else {
   const api = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos,credits,external_ids,images,keywords,`
   );
   const res = await api.json();
   setShowMovie(res);
   console.log(res);
  }
 };

 const {
  backdrop_path,
  genres,
  homepage,
  original_language,
  overview,
  poster_path,
  production_companies,
  production_countries,
  release_date,
  runtime,
  spoken_languages,
  status,
  tagline,
  title,
  videos,
  vote_average,
  /*tvshows */ first_air_date,
  in_production,
  languages,
  last_air_date,
  name,
  next_episode_to_air,
  number_of_episodes,
  number_of_seasons,
  episode_run_time,
  seasons,
  type,
 } = showMovie;
 

 useEffect(() => {
  getMovieOrShow();
 }, [id]);
 return (
  <main>
   <section
    className="top flex gap-6 my-3 mx-6 py-6 px-8 bg-blend-overlay text-white"
    style={{
     backgroundImage: `url(${imagePath + backdrop_path})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundColor: "rgba(0, 0, 0, 0.628)",
    }}
   >
    <div className="image w-4/12">
     <Image
      src={imagePath + poster_path}
      width="10000"
      height="10000"
      alt={title || name}
      className="w-[300px] h-[400px] object-fill rounded-2xl"
     />
    </div>
    <div className="details w-3/4">

     <div className="div">
      <h3 className="text-4xl font-bold mb-3">{title || name}</h3>

      <div className="flex gap-2 items-center mb-5">
       <p className="text-xl font-medium">{release_date || first_air_date}</p>
       <ul className="flex gap-1">
        {genres &&
         genres.map((genre) => <li key={genre.id} className="bg-san-marino-700 font-bold rounded-lg py-1 px-3">{genre.name}</li>)}
       </ul>
       <p>{runtime || episode_run_time} mins</p>
      </div>

     </div>

     <div className="progress">
     <ProgressCircle percent={(vote_average * 10).toFixed(0)} className=""/>
     </div>
    
    <div className="">
      <h2 className="italic mt-3 text-zinc-400">{tagline}</h2>
      <h3 className="my-2 text-2xl font-bold">Overview</h3>
      <p className="">{overview}</p>
    </div>
    </div>
   </section>

   {/* another section */}
   <section className="cast">
    <div className="casts"></div>
    <div className="production"></div>
    <div className="videos"></div>
   </section>
  </main>
 );
};

export default detailsPage;
