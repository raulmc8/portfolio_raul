import React from "react";



const Portfolio = () => {
    return (
        <section className="text-gray-600 body-font py-24 card show" id="portfolio_section">
            <div className="container px-5 pb-16 mx-auto text-center">
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">Portfolio</h2>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">These are some of my projects.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                </div>
            </div>
            
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">

                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/wedding.png" alt="" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Invitation</h2>
                                <p className="leading-relaxed mb-3">A simple landing page for an invitation for a wedding </p>
                            </div>
                        </div>
                    </div>
                
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/cocacola.png" alt="" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                            <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Coca-cola Home Page</h2>
                            <p className="leading-relaxed mb-3">This is a landign page for the coca-cola company</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/encrypt.png" alt="" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                            <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Encript message</h2>
                            <p className="leading-relaxed mb-3">A page that return a encrypt message</p>

                        </div>

                    </div>

                </div>
                <div className="container px-5 pb-24 mx-auto">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/portfolio.png" alt="" />
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                            <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Portfolio</h2>
                            <p className="leading-relaxed mb-3">This portfolio was made with Next.js and Tailwind</p>

                        </div>
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Portfolio