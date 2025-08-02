"use client";
import React from "react";
import Image from "next/image";
import HeroSection_img from "../../../public/assets/HeroSection_img.svg";
import { MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Herosection = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-32 mt-14 ">
        {/* Left: Text */}
        <div className="flex-1 ">
          <p className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-4">
            Top Rated SEO Company In Dubai | Drive Organic Growth
          </p>

          <p className="text-xl font-bold leading-tight mb-6">
            Boost Your Online Presence With Data-Driven SEO Strategies
          </p>

          <p className="text-lg text-gray-300 mb-6">
            We help businesses in Dubai dominate search rankings with cutting-edge, ROI-focused SEO solutions. Increase visibility, attract qualified leads, and grow your revenue with our expert team.
          </p>

          {/* Location Icon Line */}
          <p className="text-lg text-gray-300 mb-6 flex items-start gap-2">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            Dubai-Based Expert | Proven Results | Tailored Strategies
          </p>

          {/* Check Icon Line */}
          <p className="text-lg text-gray-300 mb-6 flex items-start gap-2">
            <CheckCircleIcon className="h-6 w-6 text-green-400" />
            97% client retention rate | 51k+ keywords ranked
          </p>

          <button className="bg-white hover:bg-green-600 text-black font-semibold py-2 px-6 rounded transition">
            Get Free SEO Audit
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <Image
            src={HeroSection_img}
            alt="Hero section"
           
            className="w-[300px] md:w-[400px] lg:w-[550px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
