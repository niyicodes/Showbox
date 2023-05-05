import Image from "next/image"
import NOIMAGE from "/public/noImage.jpg"

const SearchItem = ({image, title, overview}) => {
  return (
    <div className="flex sm:flex-row gap-5 py-3 xs:px-3 sm:px-6 my-6 border-2 items-center hover:cursor-pointer xs:flex-col">
     <div className="w-2/6 xs:w-auto" >
     {<Image src={image || NOIMAGE} width={1000} height={1000} alt={title} className="w-[200px] h-[190px] object-fill rounded-2xl"/>}
     </div>
     <div className="sm:w-5/6 xs:w-auto">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-justify">{overview}</p>
     </div>
    </div>
  )
}

export default SearchItem