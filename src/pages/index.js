import Image from "next/image";
import { Inter } from "next/font/google";
import SearchArea from "@/Components/SearchArea";
import Trending from "@/Components/Trending";
import Popular from "@/Components/Popular";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 return (
  <main className="">
   <SearchArea />
   <Trending />
   <Popular />
  </main>
 );
}
