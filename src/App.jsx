import { Outlet } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
 
  return (
    <>
    <div className="md:container ">
    <Navbar />
     <main className=" min-h-screen px-4 py-6 font-primary text-2xl">
     <Outlet />
     </main>
      
    </div>
    <footer>
      <Footer />
      </footer>
   
    </>
  )
}

export default App
