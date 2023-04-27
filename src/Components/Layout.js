import Navbar from "./Navbar";

const Layout = ({ children }) => {
 return (
  <div>
   <Navbar />
   <main className="sm:mx-8 lg:mx-24">
   {children}
   </main>
  </div>
 );
};

export default Layout;
