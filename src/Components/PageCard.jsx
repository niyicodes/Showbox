import Image from "next/image";
import ProgressCircle from "./ProgressCircle";

const PageCard = ({name,vote_average,poster_path, first_air_date, title, release_date}) => {
 const imagePath = "https://image.tmdb.org/t/p/original"
 return (
  <div className="flex flex-col gap-2 xs:w-[180px] sm:w-[250px]">
   <div className="relative mb-4">
    <Image src={imagePath + poster_path} width={10000} height={10000} className="xs:w-[180px] sm:w-[230px] h-[325px] shadow-sm rounded-md object-fill" alt="image"/>
    <div className="absolute bottom-[-1.2rem] left-2">
     <ProgressCircle percent={(vote_average * 10).toFixed(0)}/>
    </div>
   </div>
   <div className="details px-3">
    {name && <h5 className="font-bold text-lg">{name}</h5>}
    {title && <h5 className="font-bold text-lg">{title}</h5>}
    {first_air_date && <p className="text-sm text-gray-300 font-medium">{first_air_date}</p>}
    {release_date && <p className="text-sm text-gray-300 font-medium">{release_date}</p>}
   </div>
  </div>
 );
};

export default PageCard;
