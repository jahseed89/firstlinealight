import React from 'react'

const Fleet = ({ car, category, carType, carDescription }) => {
    return (
        <div className='flex justify-between items-start flex-wrap mt-10'>
            <div className='lg:w-[55%]'>
                <img
                    src={car}
                    alt="Luxury Car"
                    className="w-full h-auto object-cover mt-10"
                />
            </div>
            <div className='lg:w-[35%] pt-10 border-t-2 border-white lg:mt-10 text-justify'>
                <h3 className='text-[26px] lg:text-[28px] text-white mb-5'>{carType}</h3>
                <p className='text-[16px] text-white'>
                    {category}
                </p>
                <p className='text-[16px] text-white'>
                    {carDescription}
                </p>
            </div>
        </div>
    )
}

export default Fleet
