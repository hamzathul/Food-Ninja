import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url('https://restaurant-tcj.netlify.app/assets/heroBg-Ce9qioFl.png')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <div style={BgStyle} className="relative z-[-1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section  */}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 data-aos="fade-up" className="text-5xl ">
              Fresh and healthy Meal Plan{" "}
              <span className="text-secondary font-cursive text-7xl">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
              Delicious meals delivered to your door from $132 per week
            </p>
            {/* button section  */}
            <div data-aos="fade-up" data-aos-delay="300">
              <PrimaryButton />
            </div>
          </div>
          {/* image section  */}
          <div data-aos='zoom-in' data-aos-delay='500' className="z-30 order-1 sm:order-2">
            <img
              src="https://restaurant-tcj.netlify.app/assets/hero-BCogpiE1.png"
              alt=""
              className="w-full sm:scale-125 sm:translate-y-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
