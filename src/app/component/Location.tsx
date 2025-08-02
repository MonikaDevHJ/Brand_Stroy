"use client"
import { Card, CardContent } from "./UI/Buttons"
import { Button } from "./UI/Buttons"
import { MapPin, Building2, Briefcase } from "lucide-react"
import Image from "next/image"

const Location = () => {
  const serviceAreas = [
    {
      name: "Dubai Marina",
      description: "SEO for hospitality, real estate, and tourism businesses",
      image: "/placeholder.svg?height=200&width=300&text=Dubai+Marina",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      name: "Downtown Dubai",
      description: "E-commerce SEO for high-end brands and shopping outlets",
      image: "/placeholder.svg?height=200&width=300&text=Downtown+Dubai",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: "Business Bay",
      description: "Corporate SEO solutions for financial and business services",
      image: "/placeholder.svg?height=200&width=300&text=Business+Bay",
      icon: <MapPin className="w-5 h-5" />,
    },
  ]

  const mapLocations = [
    { name: "Downtown Dubai", x: "35%", y: "45%" },
    { name: "Business Bay", x: "45%", y: "35%" },
    { name: "Dubai Marina", x: "15%", y: "65%" },
    { name: "Al Quoz & Dubai Silicon Oasis", x: "55%", y: "55%" },
    { name: "Jumeirah & JBR", x: "25%", y: "70%" },
    { name: "Half Desert Dubai", x: "70%", y: "70%" },
  ]

  const handleLocationClick = (locationName: string) => {
    alert(`You clicked on ${locationName}`)
  }

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serving Businesses Across Dubai</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          As a leading SEO company in Dubai, we understand the unique digital landscape of the city's diverse business
          hubs. Whether you're a luxury retailer in Downtown Dubai, a tech startup in Business Bay, or a restaurant in
          Dubai Marina, our Dubai-focused SEO strategies ensure you stand out in local search results.
        </p>
      </div>

      {/* Service Areas Section */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Key Service Areas in Dubai
          </h2>

          {/* Interactive Map */}
          <div className="relative mb-16">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden border-2 border-gray-300">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 800 600">
                    {/* Simple map-like paths */}
                    <path d="M100 200 L300 180 L500 220 L700 200" stroke="#3B82F6" strokeWidth="3" fill="none" />
                    <path d="M150 100 L400 120 L600 100 L750 120" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <path d="M50 300 L250 320 L450 300 L650 320" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <path d="M200 400 L400 380 L600 400 L800 380" stroke="#3B82F6" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Location Markers */}
              {mapLocations.map((location, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: location.x, top: location.y }}
                  onClick={() => handleLocationClick(location.name)}
                >
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                    {location.name}
                  </div>
                  <div className="w-3 h-3 bg-black rounded-full mx-auto mt-1 group-hover:bg-gray-800"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={area.image || "/placeholder.svg"} alt={area.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-blue-600">{area.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Content */}
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              We tailor our SEO strategies to the needs of Dubai's dynamic market, helping businesses achieve top search
              rankings and drive local traffic.
            </p>

            <div className="mb-6">
              <p className="text-gray-900 font-medium mb-4">Want to dominate local search results in Dubai?</p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => alert("Get Started clicked!")}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
