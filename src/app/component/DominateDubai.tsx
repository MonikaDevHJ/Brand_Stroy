import { Eye, Target, Megaphone, Trophy, DollarSign, TrendingUp, Users, BarChart3, Shield, Clock } from "lucide-react"

const DominateDubaiSEO = () => {
  const importanceItems = [
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Increased Visibility",
      description:
        "SEO helps your website appear higher in search engine results, making them more visible to potential customers.",
      bgColor: "bg-red-500",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Targeted Traffic",
      description:
        "SEO allows businesses to attract targeted traffic to their websites, increasing the chances of conversions.",
      bgColor: "bg-indigo-900",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" />,
      title: "Brand Awareness",
      description:
        "SEO can help businesses build brand awareness and establish themselves as leaders in their industry.",
      bgColor: "bg-purple-500",
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Competitive Advantage",
      description: "SEO helps businesses to gain a competitive advantage over their rivals.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Cost-Effective",
      description: "SEO is a cost-effective marketing strategy that can generate a high ROI.",
      bgColor: "bg-orange-500",
    },
  ]

  const benefitsItems = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Increased Website Traffic",
      description: "SEO can help to increase website traffic from organic search results.",
      bgColor: "bg-red-500",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Improved Conversion Rates",
      description: "SEO can help to improve conversion rates by attracting more qualified leads to your website.",
      bgColor: "bg-indigo-900",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Higher ROI",
      description: "SEO is a cost-effective marketing strategy that can generate a high ROI.",
      bgColor: "bg-purple-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Brand Authority",
      description: "SEO can help to build brand authority and establish your business as a leader in your industry.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Long Term Results",
      description: "SEO is a long-term strategy that can provide sustainable results for your business.",
      bgColor: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dominate Dubai's Competitive Market With Expert SEO Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In Dubai's fast-paced digital landscape, standing out among competitors is a challenge. Businesses struggle
            with high competition, shifting search algorithms, and the need for a strong online presence to attract
            local and international customers.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            As a leading SEO company in Dubai, we specialize in tailored Dubai SEO services that drive measurable
            growth. With years of experience optimizing businesses in diverse industries, we understand the unique
            challenges of the Dubai market. Our data-driven strategies ensure your brand ranks higher, attracts the
            right audience, and achieves long-term success.
          </p>
        </div>

        {/* Importance of SEO Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Importance of SEO in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importanceItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${item.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of SEO Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits Of SEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${item.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
       
      </div>
    </div>
  )
}

export default DominateDubaiSEO
