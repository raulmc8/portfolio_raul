
import React from "react"

const Header = () =>{
    return(
<header className="text-gray-600 body-font fixed w-screen shadow-lg mb-8 bg-white bg-opacity-60 z-40" id="header">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        
<a href="#hero_section" className ="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="/html-svgrepo-com.svg" alt="" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" />
    <span className ="ml-3 text-xl">Rmarquez</span>
</a>

<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">              
            <a href="#skills_section" className="hover:text-gray-900" >Skills</a>
            <a href="#portfolio_section" className="mx-5 hover:text-gray-900">Portfolio</a>
            <a href="#contact_section" className="hover:text-gray-900" >Contact</a>                          
        </nav>
        </div>
        </header>
    )

}
    export default Header