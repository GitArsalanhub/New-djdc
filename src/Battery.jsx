import battry from '/src/assets/battry.png'; 

export default function Battery() {
    return (
        <>
            <div className="bg-[rgb(245,245,245)] py-16">
                <h2 className="flex justify-center text-3xl font-bold">Our Products</h2>
                <div className=" contaoiner mx-aut px-2 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className=" ">
                        <img src={battry} alt="batery"
                        className="transform transition duration-300 hover:scale-105" />
                        <p className="text-center text-2xl">DJ 1800 - 120 AH</p>
                    </div>
                     <div className=" ">
                        <img src={battry} alt="batery"
                        className="transform transition duration-300 hover:scale-105" />
                        <p className="text-center text-2xl">DJ 1900 - 145 AH</p>
                    </div>
                     <div className=" ">
                        <img src={battry} alt="batery"
                         className="transform transition duration-300 hover:scale-105"  />
                        <p className="text-center text-2xl">DJ 1900 - 150 AH</p>
                    </div>
                </div>
            </div>


        </>
    )
}
