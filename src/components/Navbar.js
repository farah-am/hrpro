import React from "react";
import logo from "../assets/logo.png";
import { FaUser,FaRegBell } from "react-icons/fa";
import { MdOutlineTranslate,MdOutlineWbSunny } from "react-icons/md";




function Navbar() {
  return (
    <div className="bg-black h-15 flex justify-between items-center border-b">
      <div className="bg-black h-15 flex ">
        <img src={logo}  className="object-cover"/>
      </div>
      <div className="flex justify-between absolute w-full px-80 py-1 pr-8">
          <div >
            <MdOutlineWbSunny style={{color:'#d3e73a'}}/>
          </div>
          <div >
            <MdOutlineTranslate  style={{color:'#8DD7FC'}}/>
          </div>
          <div >
            <FaRegBell  style={{color:'#589BFF'}}/>
          </div>
          <div >
            <FaUser  style={{color:'#fff'}}/>
          </div>
      </div>
    </div>
  )
}

export default Navbar;