import Image from "next/image";
import { Inter } from "next/font/google";
import SearchArea from "@/Components/SearchArea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 return (
  <main className="text-center text-4xl">
   <SearchArea />
  </main>
 );
}
