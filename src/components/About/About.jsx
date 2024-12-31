import React from "react";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url('https://restaurant-tcj.netlify.app/assets/polygon-BoHGWnV6.png')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ handlePopup }) => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1
            data-aos="fade"
            className="pt-20 tracking-wider text-4xl font-semibold text-white text-center"
          >
            About Us
          </h1>
          {/* card section  */}
          <div data-aos="fade" data-aos-delay='300' className="bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            voluptatum totam velit corrupti tempora repellat nisi deleniti, nam
            aspernatur vel ea iste cum illum dolorum eos porro in quae ullam
            perferendis sit quam inventore atque. Sapiente cupiditate ea autem
            qui quod hic fugiat animi officia. Officiis id optio magni! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            accusamus hic dolor omnis temporibus, reiciendis esse exercitationem
            accusantium aliquam laudantium adipisci pariatur commodi vitae non,
            quibusdam minima optio cum placeat doloribus tempora illo quae?
            Ratione, dolore. Corrupti placeat eveniet optio adipisci quis, nemo
            magnam, consequuntur rerum non laborum eum pariatur. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam eius ullam
            velit harum quaerat vita
            <div className="pt-10 flex justify-center items-center">
              <button
                className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                onClick={handlePopup}
              >
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>

        {/* wave vector  */}
        <div className="absolute top-0 right-0 w-full">
          <img
            src="https://restaurant-tcj.netlify.app/assets/vector-wave-BdRTN_0u.png"
            alt=""
            className="mx-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default About;
