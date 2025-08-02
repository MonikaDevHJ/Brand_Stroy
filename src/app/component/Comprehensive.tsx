"use client";
import React from "react";
import Image from "next/image";
import Rightmark_blck from "../../../public/assets/Rightmark_blck.svg"; // ✅ Make sure this path is correct

const services = [
  {
    title: "Keyword Research & Strategy",
    description:
      "Improve your rankings and drive organic traffic with data-backed strategies.",
    points: [
      "Target audience analysis",
      "High-ROI keyword selection",
      "Competitive research",
    ],
        bgColor:  "#EFFFFC",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engage with your audience on all major platforms.",
    points: [
      "Platform-specific strategies",
      "Creative content campaigns",
      "Performance tracking",
    ],
        bgColor: "#FFF7E8", // light orange

  },
  {
    title: "Keyword Research & Strategy",
    description:
      "Improve your rankings and drive organic traffic with data-backed strategies.",
    points: [
      "Target audience analysis",
      "High-ROI keyword selection",
      "Competitive research",
    ],
        bgColor:  "#FFF7E8",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engage with your audience on all major platforms.",
    points: [
      "Platform-specific strategies",
      "Creative content campaigns",
      "Performance tracking",
    ],
        bgColor: "#EFFFFC", // light orange

  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Drive targeted traffic and maximize ROI with expertly managed ad campaigns.",
    points: [
      "Google & Meta Ads",
      "A/B testing for best ROI",
      "Conversion rate optimization",
    ],
    bgColor: "#EFFFFC", // light orange
  },
  {
    title: "Content Marketing",
    description:
      "Attract and convert customers with high-quality, relevant content.",
    points: [
      "SEO blog content",
      "Infographics & videos",
      "Email marketing assets",
    ],
    cta: true, // Indicates this is the black CTA card
  },
];

const Comprehensive = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mt-5">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
          Our Comprehensive SEO Services in Dubai
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At BrandStory, we offer a full suite of Dubai services to help
          businesses rank higher, attract quality leads, and maximize ROI.
          Whether you’re a restaurant in Dubai Marina or an eCommerce store in
          Downtown Dubai, our customized strategies deliver real results.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 text-start">
          {services.map((service, index) => {
            // Check if it's the CTA card
            if (service.cta) {
              return (
                <div
                  key={index}
                  className="bg-black text-white rounded-xl p-8 shadow-lg flex flex-col"
                >
                  <h4 className="text-2xl font-bold mb-4">
                    Ready to Elevate Your Online Presence?
                  </h4>
                  <button className="bg-white text-black px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition mt-6 w-fit text-center justify-center ">
                    Get a Free SEO Audit
                  </button>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="rounded-xl p-6 shadow hover:shadow-md transition"
                style={{
                  backgroundColor: service.bgColor || "white",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Image src={Rightmark_blck} alt="tick" width={16} height={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comprehensive;
