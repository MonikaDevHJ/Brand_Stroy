"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Girlimg_svg from "../../../public/assets/Girlimg_svg.svg"

const testimonials = [
  {
    id: 1,
    image: "/images/client-testimonial.png",
    title: "E-Commerce SEO in Downtown Dubai",
    client: "Leading Fashion Retailer in Dubai",
    results: [
      "150% increase in organic traffic within 6 months",
      "85% boost in online sales through targeted SEO campaigns",
      '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
    ],
    quote: "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
    author: "Mighty Warner",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    title: "Local Business SEO in Business Bay",
    client: "Premium Consulting Firm",
    results: [
      "200% increase in local search visibility",
      "90% more qualified leads from organic search",
      'Top 3 rankings for "business consulting Dubai"',
    ],
    quote: "The ROI from their SEO work exceeded our expectations. We're now the go-to consulting firm in our area.",
    author: "Sarah Al-Mansouri",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    title: "Restaurant SEO in Dubai Marina",
    client: "Fine Dining Restaurant Chain",
    results: [
      "300% increase in online reservations",
      "75% boost in foot traffic from search",
      '#1 ranking for "fine dining Dubai Marina"',
    ],
    quote: "Our restaurants are now fully booked thanks to their incredible SEO strategies. Highly recommended!",
    author: "Ahmed Hassan",
  },
]

const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Real businesses. Real results. See how our Dubai SEO strategies have helped brands grow.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Card Component */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <Image
                    src={Girlimg_svg}
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTestimonial.title}</h3>
                    <p className="text-gray-600 font-medium">Client: {currentTestimonial.client}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {currentTestimonial.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <blockquote className="text-gray-700 italic text-lg mb-2">"{currentTestimonial.quote}"</blockquote>
                    <cite className="text-gray-900 font-semibold not-italic">{currentTestimonial.author}</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">Want to see similar results for your business?</p>
          {/* Custom Button Component */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Get a Free SEO Audit
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurClients
