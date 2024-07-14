import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoStar } from "react-icons/io5";

const WhySec = () => {
  return (
    <div className="WhySection py-5 ">
      <div className="heading text-center ">
        <p className="font-bold text-[50px] py-5">Why Shop With Us</p>
      </div>

      <div className="cardContainer grid grid-cols-3 gap-8 px-20 ">
        <div className="cards bg-[#002c3e] text-[#ffffff] p-8 flex flex-col items-center gap-2 rounded-[20px]">
          <FaShippingFast className="text-[50px] text-yellow-500" />
          <p className="font-bold text-[25px]">Fast Delivery</p>
          <p className="text-center text-lg leading-8">
            Get Your Style Sooner! <br /> Enjoy lightning-fast delivery on all
            orders, so you can rock your new look in no time. <br /> Shop now
            for speedy delivery!
          </p>
        </div>

        <div className="cards bg-[#002c3e] text-[#ffffff] p-8 flex flex-col items-center gap-2 rounded-[20px]">
          <BsCurrencyExchange className="text-[50px]  text-yellow-500" />
          <p className="font-bold text-[25px]">Free Shipping</p>
          <p className="text-center text-lg leading-8">
            Shop More, Save More! <br /> Enjoy free shipping on all orders, making it
            easier than ever to update your wardrobe. <br /> Start shopping now and
            save on delivery!
          </p>
        </div>

        <div className="cards bg-[#002c3e] text-[#ffffff] p-8 flex flex-col items-center gap-2 rounded-[20px]">
          <IoStar className="text-[50px]  text-yellow-500" />
          <p className="font-bold text-[25px]">Best Quality</p>
          <p className="text-center text-lg leading-8">
            Experience Premium Quality! <br /> Discover garments crafted with top-tier
            materials and meticulous attention to detail. <br /> Elevate your style
            with the best in the market!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySec;
