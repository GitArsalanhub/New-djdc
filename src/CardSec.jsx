import reasons from '/src/assets/reasons-1.png'; 
import reason from '/src/assets/reason-2.png'; 
import rease from '/src/assets/rease-3.png'; 

export default function CardSec() {
    return (
        <>
            <div className="mt-[16px] flex items-center flex-col">
                <h2 className="text-3xl font-bold">The Reasons to Buy</h2>
                <h2 className="text-red-700 text-3xl font-bold">DJDC Battery</h2>
            </div>

            {/* {card sec} */}

            <div className="container mx-auto mt-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
                <div className="flex flex-col items-center p-4 shadow-xl rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500">
                    <img src={reasons} alt="reason" className="w-[50px]" />
                    <h4 className="pt-3 text-xl font-bold">Longer Life & Backup</h4>
                    <p className="text-center pt-3">Our batteries are equipped with latest
                        technology & Active Carbon Material giving longer life.</p>
                </div>
                <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                    <img src={reason} alt="reason" className="w-[50px]" />
                    <h4 className="pt-3 text-xl font-bold">Quick Charging</h4>
                    <p className="text-center pt-3">Quick Charging
                        DIDC Batteries the highest in industry charging current, you dont have to worry about your battery's status.</p>
                </div>
                <div className="flex flex-col items-center p-4 shadow-xl bg-white rounded-2xl transition duration-300 hover:text-white hover:bg-blue-500 ">
                    <img src={rease} alt="reason" className="w-[50px]" />
                    <h4 className="pt-3 text-xl font-bold">Best In Class Warranties</h4>
                    <p className="text-center pt-3">With DJDC Batteries, you can enjoy peace with the long warranty of 3 years and upto 5 years with DJDC E-rickshaw batteries.</p>
                </div>
            </div>
        </>
    )
}
