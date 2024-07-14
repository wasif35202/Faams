import React from 'react'
import client from "../images/client.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css';

const TestimonialSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div className="slider-container w-full px-20 py-10 ">
      <Slider {...settings}  className=''>
        <div>
          < div className='flex flex-col items-center gap-5' >
            <p className='font-bold text-3xl text-red-500'>Customer's Testimonial</p>
            <img className='rounded-[50%] w-[250px]' src={client} alt="" />

            <p className='text-center font-bold' >Anna Trevor <br /> <span className='font-normal'>Customer</span></p>
            <p className='text-center italic w-1/2' >I recently purchased a few outfits from Faams, and I couldn't be happier with my decision! The quality of the fabrics is top-notch, and the attention to detail in the stitching and design is evident in every piece</p>
          </div >
        </div>

        <div>
          < div className='flex flex-col items-center gap-5' >
            <p className='font-bold text-3xl text-red-500'>Customer's Testimonial</p>
            <img className='rounded-[50%] w-[250px]' src={client} alt="" />

            <p className='text-center font-bold' >Anna Trevor <br /> <span className='font-normal'>Customer</span></p>
            <p className='text-center italic w-1/2' >I recently purchased a few outfits from Faams, and I couldn't be happier with my decision! The quality of the fabrics is top-notch, and the attention to detail in the stitching and design is evident in every piece</p>
          </div >
        </div>

      </Slider>
    </div>
  )
}

export default TestimonialSlider





