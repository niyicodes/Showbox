import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import Image from "next/image";
import ProgressCircle from "@/Components/ProgressCircle";
import Cast from "@/Components/Cast";
import Accordion from "@/Components/Accordion";

const detailsPage = () => {
 const [showMovie, setShowMovie] = useState([]);

 const router = useRouter();
 const { id } = router.query;

 const imagePath = "https://image.tmdb.org/t/p/original";

 const getMovieOrShow = async () => {
  const api = await fetch(
   `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos,aggregate_credits,external_ids,images,keywords,`
  );
  const res = await api.json();
  if (res.last_air_date) {
   setShowMovie(res);
  } else {
   const api = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos,credits,external_ids,images,keywords,`
   );
   const res = await api.json();
   setShowMovie(res);
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
  images,
  vote_average,
  credits,
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
  aggregate_credits,
  type,
  keywords,
 } = showMovie;

 const casts = credits || aggregate_credits;

 useEffect(() => {
  getMovieOrShow();
 }, [id]);

 const opts = {
  height: "150",
  width: "300",
 };
 const onPlayerReady = (event) => {
  event.target.pauseVideo();
 };

 
 return (
  <main className="my-3 xs:mx-2 sm:mx-6">
   <section
    className="top flex xs:flex-col sm:flex-row gap-6 py-6 px-8 bg-blend-overlay text-white"
    style={{
     backgroundImage: `url(${imagePath + backdrop_path})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundColor: "rgba(0, 0, 0, 0.628)",
    }}
   >
    <div className="image sm:w-4/12">
     <Image
      src={imagePath + poster_path}
      width="1000"
      height="1000"
      alt={title || name}
      className="w-[300px] h-[400px] object-fill rounded-2xl"
     />
    </div>
    <div className="details sm:w-3/4">
     <div className="div">
      <h3 className="text-4xl font-bold mb-3">{title || name}</h3>
      {seasons && <div className="div flex flex-row gap-4 xs:text-lg md:text-xl font-medium">
      <h3>{number_of_seasons && number_of_seasons} seasons</h3>
      <h3>{number_of_episodes && number_of_episodes} episodes</h3>
      </div>}
      <div className="flex xs:flex-col xs:gap-3 sm:flex-row justify-between sm:items-center mb-5">
       <p className="xs:text-base lg:text-xl font-medium">
        {release_date || first_air_date}
       </p>
       <ul className="grid grid-cols-2 xl:grid-cols-3 gap-2 items-center">
        {genres &&
         genres.map((genre) => (
          <li
           key={genre.id}
           className="bg-san-marino-700 xs:text-lg lg:text-xl font-bold rounded-lg py-1 px-3"
          >
           {genre.name}
          </li>
         ))}
       </ul>
       <p className="xs:text-xl lg:text-2xl">
        {runtime || episode_run_time} total mins
       </p>
      </div>
     </div>

     <div className="progress">
      <ProgressCircle percent={(vote_average * 10).toFixed(0)} className="" />
     </div>

     <div className="">
      <h2 className="italic mt-3 text-zinc-400 xs:text-xl sm:text-2xl">
       {tagline}
      </h2>
      <h3 className="my-3 xs:text-xl sm:text-2xl font-bold">Overview</h3>
      <p className="xs:text-xl sm:text-2xl">{overview}</p>
     </div>
    </div>
   </section>

   {/* another section */}
   <section className="cast">
    <div className="casts-section">
     <h3 className="my-4 text-4xl text-black">Meet the Casts</h3>

     <div className="scroll my-8 grid grid-flow-col gap-4 overflow-x-scroll pb-8">
      {casts &&
       casts.cast.map((cast) => {
        return (
         <Cast
          key={cast.cast_id}
          name={cast.name}
          act_name={cast.character}
          image={imagePath + cast.profile_path}
         />
        );
       })}
     </div>
    </div>
    <div className="production mb-8 font-medium">
     <div>
      {production_companies && (
       <Accordion
        title={"Production Companies"}
        contents={production_companies.map((company) => {
         return (
          <li key={company.id} className="">
           {company.name}
          </li>
         );
        })}
       />
      )}
     </div>
     <div>
      {production_countries && (
       <Accordion
        title={"Production Countries"}
        contents={production_countries.map((country,index) => {
         return (
          <li key={index} className="">
           {country.name}
          </li>
         );
        })}
       />
      )}
     </div>
     <div>
      {keywords && (
       <Accordion
        title={"Keywords"}
        grid_contents={
         keywords.keywords
          ? keywords.keywords.map((keyword) => {
             return (
              <li
               key={keyword.id}
               className="bg-san-marino-200 p-2 text-black list-none rounded-2xl"
              >
               {keyword.name}
              </li>
             );
            })
          : keywords.results.map((keyword) => {
             return (
              <li
               key={keyword.id}
               className="bg-san-marino-200 p-2 text-black list-none rounded-2xl"
              >
               {keyword.name}
              </li>
             );
            })
        }
       />
      )}
     </div>
    </div>
   </section>
   <section className="videosandimages">
    {/* images */}
    <div className=" my-4 p-4 flex flex-row gap-5 overflow-x-scroll scroll">
     {images &&
      images.backdrops.slice(0, 50).map((image, index) => {
       return (
        <img
         key={index}
         src={imagePath + image.file_path}
         alt={index + image.vote_average}
         className="w-[300px] h-[200px]"
        />
       );
      })}
    </div>

    {/* videos */}
    <div className=" my-4 p-4 flex flex-row gap-5 overflow-x-scroll scroll">
     {videos &&
      videos.results.slice(0, 5).map((video) => {
       return (
        <YouTube
         key={video.id}
         videoId={video.key}
         opts={opts}
         onReady={onPlayerReady}
        />
       );
      })}
    </div>
   </section>
  </main>
 );
};

export default detailsPage;
