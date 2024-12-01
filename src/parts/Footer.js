/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center ">
          <div className="sm:w-1/3 flex items-center justify-between  sm:flex-col ml-16 mr-8">
            <BrandIcon />
            <p className=" text-lg text-gray-400 flex flex-col font-light mt-7 sm:ml-16">
              <img
                href="./"
                src="https://seeklogo.com/images/F/fssai-logo-C7400699BD-seeklogo.com.png"
                alt="ISO"
                className="h-24 w-30 pb-5"
              />
              <div>Lic. No.: 11516023000110</div>
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Contact</h1>
            <p className="text-lg text-gray-400 font-light">
              vrfood74@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">+91 98921 61748</p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0 ">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href="https://www.instagram.com/vr_foodproducts/profilecard/?igsh=dnQwbmRwNmIwbW5q"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/in/vr-food-products-995704339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex-col text-center mt-7">
            <p className="text-lg text-gray-400 font-light">
              V R FOOD PRODUCTS
            </p>
            <div className="flex-row">
              <p className="inline-block text-lg text-gray-400 font-light">
                Factory: 624, Navghar Road, Near Water Tank,
                <br />
                At. Post Saphale (E) Tal./Dist. Palghar-401 102. Maharashtra
                (India)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
