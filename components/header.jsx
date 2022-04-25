
import React from "react"
import Image from "next/image"
const Header = () =>{
    return(
<header className="text-gray-600 body-font fixed w-screen shadow-lg mb-8 bg-white bg-opacity-60 z-40" id="header">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        
<a href="#hero_section" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg><span class="ml-3 text-xl">Rmarquez</span>
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