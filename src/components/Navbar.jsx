import youtubeLogo from "../assets/icons/youtube-logo.png"
import menuIcon from "../assets/icons/menu-icon.png"
import searchIcon from "../assets/icons/search-icon.png"
import profileIcon from "../assets/icons/profile-icon.png"
import microPhone from "../assets/icons/microphone-icon.png"
import bellIcon from "../assets/icons/bell-icon.png"
import { useState } from "react"

function Navbar() {
  let prova = " w-1/2 max-w-[550px] hidden md:flex items-center justify-between border-1 border-black rounded-3xl p-[7px] px-3 h-[40px]"
  const [isSearchBarOpen,setIsSearchBarOpen] = useState(true)

  function handelSearchBar(){
    setIsSearchBarOpen(prev => !prev)
    console.log( "sono is searchar open", isSearchBarOpen );
  }

  return (
    <nav className="flex items-center justify-between py-2 px-[2%]">
      <div className="flex items-center">
        <div className="p-2  rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[25px]" src={menuIcon} alt="" />
        </div>
        <div className="p-2  rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[30px]" src={youtubeLogo} alt="" />
        </div>
      </div>
    
      <form action="" className={`${isSearchBarOpen ? "flex" : "hidden"}   w-1/2 max-w-[550px] items-center justify-between border-1 border-black rounded-3xl p-[7px] px-3 h-[40px]`}>
        <input className="text-[16px] outline-none" type="text" placeholder="Cerca" />

        <div className="hidden md:block  p-2 rounded-[50px] cursor-pointer transition-all duration-300 bg-red-400 hover:bg-gray-200">
          <img className="w-[20px]" src={searchIcon} alt="" />
        </div>
      </form>
    
      <div className="flex items-center">
        <div onClick={handelSearchBar} className="p-2  rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[25px] md:hidden" src={searchIcon} alt="" />
        </div>

        <div className="p-2 hidden sm:block  rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[25px]" src={microPhone} alt="" />
        </div>

        <div className="p-2 hidden sm:block  rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[25px]" src={bellIcon} alt="" />
        </div>

        <div className="p-2 rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-gray-200">
          <img className="w-[30px]" src={profileIcon} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar