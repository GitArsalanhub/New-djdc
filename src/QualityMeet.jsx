import React from 'react'
import quality from '/src/assets/quality-1.png'; 
import qualityy from '/src/assets/qualityy-2.png'; 
import qualityyy from '/src/assets/qualityyy-3.png'; 


export default function
    () {
    return (
        <>
            <div className=' flex justify-center py-16'>
                <h1 className='text-3xl font-bold'> Quality Meets</h1>
                <strong className='text-red-500 text-3xl pl-2'> Expertise</strong>
            </div>

            <div className='contaoiner mx-aut px-2'>
                <div className="container mx-auto mt-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
                    <div className="flex flex-col items-center p-4 shadow-xl rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500">
                        <img src={quality} alt="reason" className="w-[50px]" />
                        <h4 className="pt-3 text-3xl font-extrabold">1000+</h4>
                        <p className="text-center pt-3">Pincodes Served</p>
                    </div>
                    <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                        <img src={qualityy} alt="reason" className="w-[50px]" />
                        <h4 className="pt-3  text-3xl font-extrabold">20+</h4>
                        <p className="text-center pt-3">Service Centres</p>
                    </div>
                    <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                        <img src={qualityyy} alt="reason" className="w-[50px]" />
                        <h4 className="pt-3 text-3xl font-extrabold">300+</h4>
                        <p className="text-center pt-3">Distributors</p>
                    </div>
                    <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                        <img src={qualityyy} alt="reason" className="w-[50px]" />
                        <h4 className="pt-3 text-3xl font-extrabold">50L+</h4>
                        <p className="text-center pt-3">Happy Customers</p>
                    </div>
                </div>
            </div>
        </>
    )
}
