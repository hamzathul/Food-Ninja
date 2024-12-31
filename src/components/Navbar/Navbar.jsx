import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "Contact",
    link: "/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/",
  },
  {
    id: 3,
    name: "Grains",
    link: "/",
  },
];

const Navbar = ({ handlePopup }) => {
  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section  */}
          <div className="font-bold text-3xl">LOGO</div>
          {/* Navlinks section  */}
          <div>
            <ul className="flex items-center gap-10">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="hidden lg:inline-block text-xl hover:text-primary font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* simple dropdown and links  */}
              <li className="group">
                <a
                  href=""
                  className="hidden lg:inline-block text-xl hover:text-primary font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Drop down
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* Drop down section  */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] shadow-md p-2">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Login button section  */}
              <li>
                <button
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300"
                  onClick={handlePopup}
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
