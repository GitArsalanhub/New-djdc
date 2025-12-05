import React from 'react'
import EastIcon from '@mui/icons-material/East';
import about from '/src/assets/about-bg.jpg'; 
import Aabout from '/src/assets/Aabout-img.png'; 

export default function
    () {
    return (
        <>
            <div className=' bg-cover bg-center bg-no-repeat h-full w-full py-16' style={{ backgroundImage: `url(${about})` }}>
                <div className='container mx-auto mt-4 px-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <h2 className='text-3xl font-bold mb-4'>About Us</h2>
                        <p>DJDC Battery is a company dedicated to the production,
                            R&D and sales of lead-acid batteries, Lithium battery packs.
                            Headquarters located in Shenzhen. DJDC Battery Group has established
                            lithium battery and lead-acid battery factories in Dongguan, Guangdong
                            Province and Xingan County, Jiangxi Province respectively. We have invested
                            and built factories in India, the Philippines, Turkey, Brazil and other oversea
                            countries, with more than 4,000 employees and a R&D team of more than 325 people.
                            Equipped with advanced manufacturing line, and strictly following the ISO9001
                            quality management system, Through 30 years of experience in the battery industry,
                            DJDC Battery is committed to providing domestic and foreign customers with the highest
                            quality products, including. Products are widely
                            used in E-Rickshaw Battery, electric vehicles, and other applications, and are deeply
                            loved by customers.</p>
                        <button className='bg-yellow-500 py-2 px-4 rounded text-xl mt-4 transition duration-300 hover:bg-black hover:text-white'>Read More <EastIcon /></button>
                    </div>
                    <div>
                        <img src={Aabout} alt='battery img' className='flex justify-center' />
                    </div>
                </div>
            </div>

        </>

    )
}
