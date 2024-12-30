import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          {/* heading section  */}
          <h1 className="py-10 text-3xl font-bold text-center">Contact Us</h1>
          {/* grid section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* address section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            {/* E-mail section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>info@foodninja.com</p>
                <p>hr@foodninja.com</p>
              </div>
            </div>

            {/* Number section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>+91 6547654764 - Sales</p>
                <p>+91 6547654764 - WhatsApp</p>
                <p>+91 6547654764 - Mobile</p>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="flex justify-between p-4 items-center">
            <p>© 2025 Food Ninja. All rights reserved</p>
            <div className="flex items-center gap-6">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
