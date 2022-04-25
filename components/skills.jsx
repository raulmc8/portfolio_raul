
import React from "react";

const Skills = () => {
    return (
        <section className="text-gray-600 body-font max-w-full card show" id="skills_section">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">SKILLS</h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">These are the technical skills I have for web development.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 md:divide-x">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
                        <div className="text-yellow-500 mb-5 flex-shrink-0">
                        <img src="/react.png" alt="" className="fab fa-node bg-yellow-100 rounded-full px-2 py-4 text-6xl" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3" >Front end</h2>
                            <p className="leading-relaxed text-base">-Fundamental of web development HTML, CSS and JS.</p>
                            <p className="leading-relaxed text-base">-React with hooks, router, countext and Redux.</p>
                            <p className="leading-relaxed text-base md:mb-4">Tailwind and boostrap for layout.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
                        <div className="text-yellow-500 mb-5 flex-shrink-0">
                            <img src="/piton-2.png" alt="" className="fab fa-node bg-yellow-100 rounded-full px-2 py-4 text-6xl" />
                            
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3" >Back End</h2>
                            <p className="leading-relaxed text-base">-Java IO, Java Util </p>
                            <p className="leading-relaxed text-base">-Node.js </p>
                            <p className="leading-relaxed text-base">-Python.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills

