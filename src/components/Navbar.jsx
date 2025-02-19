import { Link, Links } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import avatar  from '../assets/avatar.png'
import { GoBookmark } from "react-icons/go";

const navigation =[
  {  name: "Dashboard",href:"/dasboard"},
  {  name: "orders", href:"/order"},
  {  name: "Cart page",href:"/cart"},
  {  name: "check out",href:"/checkout"},

]


const Navbar = ()=>{
    const currentUser= false;
    const [showDropodwn,setDropdown] = useState(false);

    return(
        <header className="px-4 py-6 cursor pointer">
          <nav className="flex items-center justify-between gap-1">
              {/* right of navbar */}
              <div className="flex items-center md:gap-16 gap-4">
                <Link to='/' >
                <MdMenuBook className="text-primary size-7"/>
                </Link>
                {/* search bar */}
                <div className="relative flex flex-row items-center sm:w-72 w-40 space-x-2">
                <CiSearch className="absolute left-1 size-4 "/>
                <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-7 rounded-md focus:outline-none" />
                </div>

              </div>
            
              {/* left of navbar */}
              <div className=" flex items-center md:space-x-3 space-x-2  ">
              {
              currentUser? <>
              <button onClick={()=> setDropdown(!showDropodwn)}>
                <img src={avatar} alt="" className={`size-7 rounded-full ${currentUser?'ring-2 ring-blue-800':''}`} />
              </button>
              {
              showDropodwn && (
                <div className="absolute right-0 mt-55 w-48 bg-white shadow-lg  rounded-md z-40">
                    <ul className="py-2 ">
                        {
                            navigation.map((link)=>(
                                <li key={link.name}>
                                    <Link className="block px-4 py-2 text-xm hover:bg-gray-200" to={link.href}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
              )
            }
              </>:  <Link to='/login' onClick={()=>alert('This is not availabe right now')}><FaRegCircleUser className="size-7 text-primary" /></Link>
              }
             
            <button className="hidden sm:block ">
           
            <GoBookmark className="text-primary size-7 "/>
            </button>
            <Link to='/' className="bg-primary rounded-md p-1 px-2 sm:px-6 flex text-white items-center text-primary">
            <TiShoppingCart className=" size-7" />
            <span className="text-sm font-semibold">0</span>
            </Link>
              </div>
          </nav>
           
          
        </header>
    )

}
export default Navbar;