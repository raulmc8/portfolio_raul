
import React from "react"


const Hero = () =>{
    return (
        <section className="text-gray-600 body-font pt-16 max-w-full flex md:py-24 card show" id="hero_section">
    <div className="container mx-auto flex px-5 pb-8 pt-24 md:flex-row flex-col items-center"  >
        <div className="lg:flex-grow md:w-1/2 lg: md: flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi! I´m Raúl</h1>
        <p className="mb-8 leading-relaxed">I am on a journey to become a web developer, with the top in the 
            industry, constantly updating and practicing hard to achive it</p>
            <div className="flex justify-center">
            <a href="../public/Raúl Márquez Castillo-3.pdf" download="Marquez, Raul - CV.pdf">
            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Download CV</button></a>
        
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="w-full h-full flex justify-center align-center">
                <img src="/IMG_1020_Original.jpg" alt="no chive" className="object-cover object-center rounded" />
            </div>
        </div>
     </div>
        </section>

    ); 

}
export default Hero