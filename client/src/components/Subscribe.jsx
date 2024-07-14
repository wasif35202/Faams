import React from 'react'

const Subscribe = () => {
    return (
        <div className='w-full flex flex-col items-center bg-[#d4ced0] p-10 gap-10'>

            <p className='text-center w-1/2 font-bold text-2xl'>Subscribe To Get Discount Offers</p>
            <p className='text-center  w-1/2'>Subscribe to our newsletter and get an exclusive 10% additional discount on your first purchase! Be the first to know about special offers, new arrivals, and more. Join now and start saving today!</p>

            <form className='flex flex-col items-center w-full gap-10' action="submit">
                <input className='h-[60px] w-1/2 rounded-[90px] px-5 ' type="text" placeholder="Enter Your Email" />
                <button className='bg-red-500 text-white h-[60px] w-[200px] rounded-[60px]' type="submit">Subscribe</button>

            </form>

        </div>
    )
}

export default Subscribe