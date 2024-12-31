import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
          >
            Taste the Healthy Difference
          </h1>
        </div>
        {/* Text content section  */}
        <div className="space-y-10">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
          >
            <div>
              <p>
                We know that <span className="text-primary">Something</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus accusamus quas voluptatum!
              </p>
            </div>
            <div></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
          >
            <div></div>
            <div>
              <p>
                We know that <span className="text-primary">Something</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus accusamus quas voluptatum!
              </p>
            </div>
          </div>
          {/* button section  */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offest="0"
            className="flex justify-center mt-10 sm:mt-14"
          >
            <PrimaryButton />
          </div>
        </div>
        {/* bg fruit pngs */}
        {/* we put absolute here, bcz the container class is relative that is why it is showing like that */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img
            data-aos="fade-right"
            src="https://restaurant-tcj.netlify.app/assets/leaf-C1v4Wmxv.png"
            alt=""
            className="max-w-[160px]"
          />
        </div>
        <div
          data-aos="fade-right"
          className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
        >
          <img
            src="https://restaurant-tcj.netlify.app/assets/tomato-BArVx_-y.png"
            alt=""
            className="max-w-[280px]"
          />
        </div>
        <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
          <img
            data-aos="fade-left"
            src="https://restaurant-tcj.netlify.app/assets/lemon-B-yhuoNo.png"
            alt=""
            className="max-w-[200px]"
          />
        </div>
        <div
          data-aos="fade-left"
          className="hidden sm:block absolute bottom-0 right-0"
        >
          <img
            src="https://restaurant-tcj.netlify.app/assets/apple-B3cOfIDT.png"
            alt=""
            className="max-w-[200px]"
          />
        </div>
        <div
          data-aos="fade"
          className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100"
        >
          <img
            src="https://restaurant-tcj.netlify.app/assets/kiwi-Do64hCSg.png"
            alt=""
            className="max-w-[180px]"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
