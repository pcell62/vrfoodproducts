/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */

import React from "react";
import { Fade } from "react-awesome-reveal";

const Service = ({ data }) => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Product Categories
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Explore Our Wide Range of Sauces and Condiments.
          </p>
        </Fade>
        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <Fade
              direction={item.animation}
              delay={200 * index}
              key={index}
              triggerOnce
            >
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={item.imageUrl}
                      alt="Service"
                      className="w-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src={item.imageUrl2}
                      alt="Hover Service"
                      className="w-full absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
