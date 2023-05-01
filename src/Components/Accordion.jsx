"use client";
import { useState } from "react";

const Accordion = ({ title, contents, grid_contents }) => {
 const [isExpanded, setIsExpanded] = useState(true);

 const toggleAccordion = () => {
  setIsExpanded(!isExpanded);
 };

 return (
  <div className={`border-b border-gray-200 my-3 rounded-t-md ${isExpanded ? "bg-san-marino-200" : "bg-san-marino-400 text-white"}`}>
   <div
    className="flex justify-between items-center py-2 px-4 cursor-pointer"
    onClick={toggleAccordion}
   >
    <h2 className="xs:text-xl sm:text-2xl lg:text-3xl font-medium">{title}</h2>
    <svg
     className={`w-4 h-4 transition-transform duration-200 transform ${
      isExpanded ? "rotate-180" : ""
     }`}
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    >
     <path d="M18 15l-6-6-6 6" />
    </svg>
   </div>
   {isExpanded && (
    <div className="py-2 px-4 text-xl flex flex-col bg-slate-50">
     {contents}
    </div>
   )}
   {isExpanded && (
    <div className="grid xs:grid-cols-3 sm:grid-cols-5 gap-4 text-center xs:text-base sm:text-xl bg-slate-50">
     {grid_contents}
    </div>
   )}
  </div>
 );
};

export default Accordion;
