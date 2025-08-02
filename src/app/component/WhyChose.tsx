"use client"

import { MapPin, TrendingUp, Search, Target, Users } from "lucide-react"

const WhyChooseSEOPartner = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Blue Border */}
        <div className="w-full h-1 bg-blue-500 mb-8"></div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us as Your SEO Partner in Dubai?
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Brandstery, we don't just offer SEO services—we deliver real, measurable results that help businesses
            thrive in Dubai's competitive digital landscape. Here's why top brands trust us:
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="relative">
          {/* Row 1 - Top two hexagons */}
          <div className="flex justify-center gap-8 mb-4">
            {/* Local Expertise Hexagon */}
            <div className="relative">
              <div className="hexagon bg-gray-50 border-2 border-gray-200 p-6 w-64 h-56 flex flex-col items-center justify-center text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Local Expertise in Dubai's Market</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Deep understanding of Dubai's business environment, search trends, and consumer behavior</p>
                  <p>• Localized strategies for local businesses, e-commerce, and hospitality and healthcare</p>
                </div>
              </div>
            </div>

            {/* Proven Track Record Hexagon */}
            <div className="relative">
              <div className="hexagon bg-gray-50 border-2 border-gray-200 p-6 w-64 h-56 flex flex-col items-center justify-center text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Proven Track Record with Data-Driven SEO</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• 100+ successful SEO campaigns across various industries</p>
                  <p>• Client success stories with measurable ROI growth and increased organic traffic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Middle two hexagons */}
          <div className="flex justify-center gap-8 mb-4">
            {/* Transparent Reporting Hexagon */}
            <div className="relative">
              <div className="hexagon bg-gray-50 border-2 border-gray-200 p-6 w-64 h-56 flex flex-col items-center justify-center text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Search className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Transparent & Insightful Reporting</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Monthly performance reports with clear KPIs and actionable insights</p>
                  <p>• 24/7 access to real-time analytics dashboard for full transparency</p>
                </div>
              </div>
            </div>

            {/* Customized SEO Hexagon */}
            <div className="relative">
              <div className="hexagon bg-gray-50 border-2 border-gray-200 p-6 w-64 h-56 flex flex-col items-center justify-center text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Customized SEO Strategies</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Tailor-made SEO solutions—no one-size-fits-all approach</p>
                  <p>• Strategic built around your business goals, target audience, and industry dynamics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 - Bottom two hexagons */}
          <div className="flex justify-center gap-8">
            {/* Dedicated Team Hexagon */}
            <div className="relative">
              <div className="hexagon bg-gray-50 border-2 border-gray-200 p-6 w-64 h-56 flex flex-col items-center justify-center text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Dedicated Team of SEO Experts</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Certified SEO professionals with years of experience in Dubai SEO services</p>
                  <p>• Continuous learning and adaptation to the latest algorithm updates</p>
                </div>
              </div>
            </div>

            {/* CTA Hexagon */}
            <div className="relative">
              <div className="hexagon bg-blue-600 border-2 border-blue-600 p-6 w-64 h-56 flex flex-col items-center justify-center text-center text-white">
                <h3 className="text-sm font-bold mb-4">Partner with us and dominate search rankings in Dubai!</h3>
                <button className="bg-white text-blue-600 px-4 py-2 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
                  Get Your Free SEO Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
      `}</style>
    </div>
  )
}

export default WhyChooseSEOPartner
