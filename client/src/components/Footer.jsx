import React from "react";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-6 gap-5 bg-[#f8f8f8] p-10">
      <div className="col-span-2 flex flex-col gap-10 ">
        <div className=" ">
          <img width={210} src={require("../images/logo.png").default} alt="" />
        </div>
        <div>
          <p>
            <span className="font-bold">Address:</span> 136 E Bankers Avenue
            Cooperative Housing Society Bedian Road Lahore
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Telephone:</span>0312-4934245
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Email:</span>{" "}
            muhamad.wasif.964@gamil.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="font-bold text-[22px]   ">Menu</div>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Testimonial</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="font-bold text-[22px]   ">Account</div>
        <div>Check Out</div>
        <div>Login</div>
        <div>Register</div>
        <div>Shopping</div>
        <div>Widget</div>
      </div>

      <div className="col-span-2 flex flex-col gap-10   ">
        <div className="font-bold text-[22px]   ">Newsletter</div>
        <div>Please Subscribe</div>
        <form action="">
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
