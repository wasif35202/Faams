import React from 'react'

const Contact = () => {
  return (
   <>
   <div className='w-full bg-red-500 text-white font-bold text-[50px] text-center py-5'>Contact Us</div>
   <div className='flex flex-col justify-center items-center space-y-5 py-5'>

    <input type='text' placeholder='Enter Your Name' className='border h-10 w-1/2 p-3'></input>
    <input type='email' placeholder='Enter Your Email'  className='border h-10 w-1/2 p-3'></input>
    <input type='text' placeholder='Enter Your Subject'  className='border h-10 w-1/2 p-3'></input>
    <textarea placeholder='Enter Your Message'  className='border h-[100px] w-1/2 p-3'></textarea>
    <input type='submit' value={"submit"}  className='border w-[80px]  p-3'></input>

   </div>
   
   </>
  )
}

export default Contact