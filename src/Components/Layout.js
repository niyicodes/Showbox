import Navbar from "./Navbar";

const Layout = ({ children }) => {
 return (
  <div>
   <Navbar />
   <main className="xl:mx-24">
   {children}
   </main>
  </div>
 );
};

export default Layout;
