import React from 'react'
import comma from '/src/assets/comma.png';

export default function
    () {
    return (

        <>
            <div className=' flex flex-col items-center md:flex-row md:justify-center py-16'>
                <h1 className='text-3xl font-bold'> What Our</h1>
                <strong className='text-red-500 text-3xl pl-2'> Customers Say?</strong>
            </div>

            {/* {card sec} */}

            <div className="container mx-auto mt-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
                <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                    <img src={comma} alt="reason" className="w-[50px]" />
                    <p className="text-center pt-3"><i>I am selling DJDC batteries since last 2 years and have not received a single complaint from my customers. 
                        I am surprised that how they are selling such top quality on cheap prices.</i></p>
                        <h4 className="pt-3  text-red-500">Abhiuday</h4>
                </div>
               <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                    <img src={comma} alt="reason" className="w-[50px]" />
                    <p className="text-center pt-3"><i>I trust DJDC batteries for all my solar installations. All my customers are happy and I am having peaceful sleeps at night.</i></p>
                        <h4 className="pt-3 text-red-500">kavita</h4>
                </div>
                <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                    <img src={comma} alt="reason" className="w-[50px]" />
                    <p className="text-center pt-3 "><i>I believe, no other brands have bigger range of product than this. No doubt, Smart batteries are best for market.</i></p>
                        <h4 className="pt-3  text-red-500">juliya</h4>
                </div>
            </div>
        </>
    )
}
