import React from "react";

const Contact = () =>{
    return (
        <section className="text-gray-600 body-font relative px-5 w-full pb-24 card show" id="contact_section">
        <div className="container pb-16 px-5 mx-auto text-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">Contact</h2>
        
        <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex" ></div>
        </div> 
        </div>
       <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
       <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.720594209537!2d-93.06833958511233!3d18.176780687610123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee7d053ed56abd%3A0xeb327e84355f7537!2s5%20de%20Mayo%2C%2086200%20Jalpa%20de%20M%C3%A9ndez%2C%20Tab.!5e0!3m2!1ses!2smx!4v1650582343412!5m2!1ses!2smx" width="600" height="450" style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
           <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"> Address</h2>
                <p className="mt-1">Villahermosa, Tabasco, Mexico</p>
           </div>
           <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
            <a className="text-yellow-500 leading-relaxed" href="raulmc8@gmail.com"></a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4" >Phone</h2>
            <p className="leading-relaxed"> +52 9931946688</p>
           </div>
       </div>
       
       </div> 
        
        
       <div className="bg-primary lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me!</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Please, share with me any doubt or question you may have.</p>
        <form action="">
            <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600" htmlFor="">Name</label>
            <input className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" name="" id="name" />
            </div>
            <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600" htmlFor="">Email</label>
            <input className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" name="" id="mail" />
            </div>
            <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600" htmlFor="">Message</label>
            <textarea className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"> Send</button>
        </form>
        </div>
        
        </div>
        </section>
    )
}

export default Contact