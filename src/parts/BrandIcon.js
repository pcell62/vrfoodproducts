/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import Button from "../elements/Button";
import BuildWebsite from "../assets/images/logo.png";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <img src="../assets" alt="" loading="lazy" />
      <p className=" text-4xl text-[#d6b469] tracking-tighter font-medium flex justify-center items-center ">
        <img
          className="rounded-xl"
          height={80}
          width={80}
          src={BuildWebsite}
          alt="Build Website"
          loading="lazy"
        />
        <span className="hidden sm:inline">FOOD PRODUCTS</span>
      </p>
    </Button>
  );
}
