import SearchArea from "@/Components/SearchArea";
import Trending from "@/Components/Trending";
import Popular from "@/Components/Popular";
import { motion } from "framer-motion";

export default function Home() {
 return (
  <motion.main
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
  >
   <SearchArea />
   <Trending />
   <Popular />
  </motion.main>
 );
}
