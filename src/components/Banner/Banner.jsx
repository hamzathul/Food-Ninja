import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

//  Leaf from "https://restaurant-tcj.netlify.app/assets/leaf-C1v4Wmxv.png";
//  Tomato from "https://restaurant-tcj.netlify.app/assets/tomato-BArVx_-y.png";
//  Lemon from "https://restaurant-tcj.netlify.app/assets/lemon-B-yhuoNo.png";
//  Apple from "https://restaurant-tcj.netlify.app/assets/apple-B3cOfIDT.png";
//  Kiwi from "https://restaurant-tcj.netlify.app/assets/kiwi-Do64hCSg.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div>
          <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Taste the Healthy Difference
          </h1>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div>
              <p>
                We know that <span className="text-primary">Something</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus accusamus quas voluptatum!
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
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
          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>
        </div>
        {/* bg fruit pngs */}
        {/* we put absolute here, bcz the container class is relative that is why it is showing like that */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img
            src="https://restaurant-tcj.netlify.app/assets/leaf-C1v4Wmxv.png"
            alt=""
            className="max-w-[160px]"
          />
        </div>
        <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img
            src="https://restaurant-tcj.netlify.app/assets/tomato-BArVx_-y.png"
            alt=""
            className="max-w-[280px]"
          />
        </div>
        <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
          <img
            src="https://restaurant-tcj.netlify.app/assets/lemon-B-yhuoNo.png"
            alt=""
            className="max-w-[200px]"
          />
        </div>
        <div className="hidden sm:block absolute bottom-0 right-0">
          <img
            src="https://restaurant-tcj.netlify.app/assets/apple-B3cOfIDT.png"
            alt=""
            className="max-w-[200px]"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
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
