const ProgressCircle = ({ percent }) => {
 const dashArray = Math.PI * 100;
 const dashOffset = Math.PI * (100 - percent);

 const bar = {
  low: "#db2360",
  medium: "#d2d531",
  high: "#21d07a",
  none: "#d4d4d4",
 };
 const track = {
  low: "#571435",
  medium: "#423d0f",
  high: "#204529",
  none: "#666666",
 };

 const getColor = (rating) => {
  if(rating>=70) return "high"
  if(rating>=40) return "medium"
  if(rating>0) return "low"
  return "none"
 }
 return (
  <div className="w-[38px] h-[38px] bg-san-marino-800 rounded-full border flex justify-center items-center">
   <svg
    width={"34px"}
    height="34px"
    viewBox="0 0 100 100"
    className="rotate-[-90deg]"
   >
    <circle
     cx="52.5"
     cy="52.5"
     r="50"
     fill="transparent"
     stroke={track[getColor(percent)]}
     strokeWidth={6}
     strokeDasharray={dashArray}
     className="scale-[0.95]"
    />
    <circle
     cx="52.5"
     cy="52.5"
     r="50"
     fill="transparent"
     stroke={bar[getColor(percent)]}
     strokeWidth={6}
     strokeDasharray={dashArray}
     strokeDashoffset={dashOffset.toString()}
     strokeLinecap={"round"}
     className="scale-[0.95]"
    />
    
   </svg>
   <div className="absolute font-semibold text-white">
    {percent > 0 ? (
     <div className="text-[13px]">
      <p className="pr-[7px]">{percent}</p> <span className="absolute text-[8px] top-0 left-4">%</span>
     </div>
    ) : (
     "NR"
    )}
   </div>
  </div>
 );
};

export default ProgressCircle;
