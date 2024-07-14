import React from "react";
import arival from "../images/arrival-bg.jpg";
const Arrival = () => {
  return (
    <div className="relative bg-[#d4ced0]">
      <img className="ml-20 w-2/4" src={arival} alt="" />
      <p className="absolute right-10 top-0 flex h-full w-1/2 items-center text-center">
        Discover the Latest in Fashion: Our New Arrivals are Here! Welcome to
        Faams, where fashion meets innovation! We are thrilled to introduce our
        latest collection, meticulously designed to elevate your style and
        comfort. Our new arrivals feature an exquisite range of garments that
        blend contemporary trends with timeless elegance.
      </p>
    </div>
  );
};

export default Arrival;
