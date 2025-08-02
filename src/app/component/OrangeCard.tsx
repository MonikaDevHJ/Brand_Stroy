import { Phone, Mail, MapPin } from "lucide-react"

const OrangeCard = () => {
  return (
    <div className="relative max-w-4xl mx-auto w-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl p-8 text-white overflow-hidden mt-20">
      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <div className="absolute right-[-100px] top-[-100px] w-80 h-80 border-4 border-white rounded-full"></div>
        <div className="absolute right-[-50px] top-[-50px] w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute right-[-20px] top-[-20px] w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready to Grow Your Business with SEO in Dubai? w-screen
        </h1>

        {/* Subtext */}
        <p className="text-lg mb-6 opacity-90 max-w-2xl">
          Don't let your competitors outrank you. Take the first step toward higher rankings, more traffic, and
          increased revenue with our expert SEO services.
        </p>

        {/* Free audit section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get a Free SEO Audit Today!</h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-lg">Personalized strategy for your business</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-lg">Competitor analysis & keyword opportunities</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-lg">No-obligation consultation with an SEO expert</span>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border-2 border-white/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+971 52 283 1665</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@brandstory.ae</span>
            </div>
          </div>

          <div className="border-2 border-white/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold leading-tight">
                  G5, Al Meheri Plaza, opp DBC Building,
                  <br />
                  Al Khabaisi Area, Deira Dubai - 81577,
                  <br />
                  United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 mb-6">
          Request a Free SEO Audit
        </button>

        {/* Limited time offer */}
        <div className="text-xl font-semibold">
          Limited-Time Offer: Get a FREE SEO strategy session when you sign up this month!
        </div>
      </div>
    </div>
  )
}

export default OrangeCard
