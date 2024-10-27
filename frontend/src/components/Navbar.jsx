
import { FaBarsStaggered, FaS } from "react-icons/fa6";
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import avatarUser from '../assets/avatar.png'
import { useState } from "react";
const Navbar =()=>{
    const navigation =[
        {name :'Dashboard', href:'/dashboard'},
        {name:'orders', href:'/orders'},
        {name:'Cart Page', href:'/cart'},
        {name:"Checkout", href:'/checkout'}
    ]
    const currentUser = true;
    const [isDropdownopen , setIsDropdownopen] = useState(false);
    
    return(
        <header className="max-w-screen-2xl  max-auto px-4 py-6" >
           <nav className="flex justify-between items-center">
             {/* left side */}
             <div className="flex items-center sm:gap-16 gap-4">
                <Link to='/'>
                <FaBarsStaggered className="size-5" />
                </Link>
                <div className="relative sm:w-72 w-40 space-x-2">
                 <CiSearch className="absolute inline-block left-3 inset-y-2"/>
                 <input type="text" placeholder="Search " className="bg-[#EAEAEA] 
                 w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                </div>
             </div>

             {/* right side */}
             <div className="flex items-center md:space-x-3 space-x-2">
                <div>
                    {
                        currentUser ? 
                        <>
                        <button onClick={()=>setIsDropdownopen(!isDropdownopen)}>
                        <img src={avatarUser} alt="user" className={`size-6 rounded-full 
                            ${currentUser ? 'ring-2 ring-primary': ''}`}/>
                        </button>

                        {
                            isDropdownopen &&(
                                <div className="absolute right-0 w-48 bg-white shadow-lg mt-2
                                 rounded-md z-40 ">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item)=>(
                                               <li key={item.name}>
                                                <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100 "
                                                onClick={()=>setIsDropdownopen(false)}>
                                                  {item.name}  
                                                </Link>
                                               </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> 
                        
                        :
                        <Link to='/login'><HiOutlineUser className="size-5"/></Link>
                    }
                </div>
                
                <button className="hidden sm:block">
                    <HiOutlineHeart className="size-5"/>
                </button>
                <Link to='/cart' className="flex 
                 bg-primary p-1 sm:px-6 px-2 items-center rounded-sm">
                 <HiOutlineShoppingCart/>
                 <span className="text-sm font-semibold sm:ml-1">0</span>
                </Link>
             </div>
           </nav>
        </header>
    )
}
export default Navbar;