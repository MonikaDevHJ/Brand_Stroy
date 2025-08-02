"use client";

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const services = [
  {
    title: "Keyword Research & Strategy",
    points: [
      "Competitor analysis & market research",
      "Long-tail keyword strategy for high conversion rates",
      "Industry-specific keyword optimization (e.g., SEO for luxury brands in Dubai)",
    ],
  },
  {
    title: "On-Page Optimization",
    points: [
      "Optimized meta titles, descriptions, and headers",
      "SEO-friendly content enhancements",
      "Internal linking & URL structuring",
    ],
  },
  {
    title: "Technical SEO",
    points: [
      "Website speed optimization & Core Web Vitals improvements",
      "Schema markup for better search visibility",
      "Mobile responsiveness & secure HTTPS implementation",
    ],
  },
  {
    title: "Local SEO (Google My Business & Citations)",
    points: [
      "Google My Business optimization for Dubai-based businesses",
      "Local citations & NAP (Name, Address, Phone) consistency",
      "Customer review management & local backlink strategies",
    ],
  },
  {
    title: "Content Marketing & SEO Copywriting",
    points: [
      "Blog writing with Dubai SEO best practices",
      "SEO-optimized landing pages & service pages",
      "Content tailored for real estate SEO in Dubai, healthcare, e-commerce, and more",
    ],
  },
  {
    title: "Ethical Link Building",
    points: [
      "Guest posting & outreach campaigns",
      "Niche-specific backlinks for Dubai industries",
      "Brand mentions & PR-driven link acquisition",
    ],
  },
  {
    title: "Performance Tracking & Reporting",
    points: [
      "Google Analytics & Search Console monitoring",
      "Monthly SEO performance reports with actionable insights",
      "Ongoing strategy refinement based on data-driven decisions",
    ],
  },
];

const HerSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-md shadow-sm p-6 border"
            >
              <h3 className="text-lg font-semibold text-black mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Final Call to Action Box */}
          <div className="bg-black text-white rounded-md p-6 flex flex-col justify-between shadow-md">
            <div className="mb-6">
              <p className="text-xl font-semibold">
                Ready to Elevate Your Online Presence?
              </p>
            </div>
            <button className="bg-white text-black rounded-md px-4 py-2 font-semibold hover:bg-gray-200 transition">
              Get a Free SEO Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerSection;
