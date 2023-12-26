import { useState } from "react"
import logo from "../utils/logo.png"
import menu from "../utils/menu.png"

const Header =()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleBar=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="bg-zinc-950 sticky top-0 z-[20] mx-auto w-full
        items-center justify-between border-blue-700 p-8 flex flex-wrap">
            
            <div className="h-14 w-32">
                 <img className="buger" 
                 src={logo}
                 alt="logo"/>
            </div>

            <div className="w-1/3 text-white flex justify-end flex-wrap">
                <div className="lg:flex justify-between  min-[200px]:hidden md:hidden w-full ">
                    <h1>Home</h1>
                    <h1>About Us</h1>
                    <h1>Contact Us</h1>
                    <h1>Cart</h1>
                </div>

                <div className="lg:hidden min-[200px]:flex md:flex">
                    <button onClick={toggleBar}>
                        {isOpen ? "×" : "Menu"}
                        
                    </button>
                </div>
                {isOpen && (
                       <div className="flex basis-full flex-col items-center ">
                    <h1>Home</h1>
                    <h1>About Us</h1>
                    <h1>Contact Us</h1>
                    <h1>Cart</h1>
                </div>
                )}

            </div>
            
            
           
        
        </div>
    )
}

export default Header;