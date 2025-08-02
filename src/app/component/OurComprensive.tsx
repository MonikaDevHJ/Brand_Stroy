import Image from "next/image"
import Laptop from "../../../public/assets/Laptop.svg"

const OurComprehensive = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Comprehensive SEO Process</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - SEO Services List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Your Business</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Website Architecture Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Competitor Audit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Keyword Research</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">On Page Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Content Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Topical Authority Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">UI UX Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Conversion Rate Optimization - CRO</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Technical Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Off Page Management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">Monitoring & Reporting</span>
              </li>
            </ul>
          </div>

          {/* Right side - Content Card */}
          <div className="bg-blue-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Business</h3>

              <div className="mb-6">
                <Image
                  src={Laptop }
                  alt="Professional working on laptop for SEO strategy"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <p className="text-gray-600 leading-relaxed">
                At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a
                tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit,
                identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes,
                we go beyond by ensuring complete error-free optimization for better crawl accessibility and user
                experience. Our strategic approach aligns with your business model, driving enhanced visibility and
                long-term growth in the competitive Dubai market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurComprehensive
