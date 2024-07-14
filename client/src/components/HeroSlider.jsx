import React from "react";
import SliderBg from "../images/slider-bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container w-full pb-[20px]">
      <Slider {...settings} className="">
        <div className="relative">
          <div className="h-[550px] w-full overflow-hidden">
            {" "}
            <img className="w-full" src={SliderBg} alt="" />
          </div>

          <div className="absolute left-0 top-0 z-10 w-1/2 px-5 py-10">
            <p className="flex flex-col gap-2 text-center">
              <span className="text-2xl font-bold text-red-500">
                {" "}
                🎉 Exclusive 20% Off Sale on Trendy Garments! 🎉{" "}
              </span>
              <br />
              <span className="text-xl font-bold">
                {" "}
                Hey fashion enthusiasts!{" "}
              </span>{" "}
              <br />
              <span className="font-bold">
                {" "}
                Looking to upgrade your wardrobe? Now is the perfect time! Our
                garments website is thrilled to announce a limited-time 20% OFF
                sale on all our stylish and trendy clothing. From chic dresses
                and cozy sweaters to sleek jackets and comfy loungewear, we’ve
                got everything you need to stay fashionable and fabulous!
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[550px] w-full overflow-hidden">
            {" "}
            <img className="w-full" src={SliderBg} alt="" />
          </div>

          <div className="absolute left-0 top-0 z-10 w-1/2 px-5 py-10">
            <p className="flex flex-col gap-2 text-center">
              <span className="text-2xl font-bold text-red-500">
                {" "}
                🎉 Exclusive 20% Off Sale on Trendy Garments! 🎉{" "}
              </span>
              <br />
              <span className="text-xl font-bold">
                {" "}
                Hey fashion enthusiasts!{" "}
              </span>{" "}
              <br />
              <span className="font-bold">
                {" "}
                Looking to upgrade your wardrobe? Now is the perfect time! Our
                garments website is thrilled to announce a limited-time 20% OFF
                sale on all our stylish and trendy clothing. From chic dresses
                and cozy sweaters to sleek jackets and comfy loungewear, we’ve
                got everything you need to stay fashionable and fabulous!
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
