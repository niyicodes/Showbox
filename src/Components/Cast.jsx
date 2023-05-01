const Cast = ({ image, name, act_name }) => {
 return (
  <div className="w-[200px] overflow-hidden shadow-xl rounded-b-lg">
   <img src={image} alt={name} className="rounded-t-xl h-3/4 object-cover"/>
   <div className="mt-3 text-center">
   <h4 className="text-xl font-bold">{name}</h4>
   <p className="text-base text-slate-400">{act_name}</p>
   </div>
  </div>
 );
};

export default Cast;
