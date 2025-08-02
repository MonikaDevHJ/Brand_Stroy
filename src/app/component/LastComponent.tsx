"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const LastComponent = () => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const faqData = [
    {
      id: "item-1",
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the quality of optimization efforts. Generally, you can expect to see some initial improvements in rankings, traffic, and conversions within 3 to 6 months; however, more competitive industries may take longer to see significant results. Consistency and quality in SEO efforts are key to sustained growth.",
    },
    {
      id: "item-2",
      question: "How do you measure the success of your SEO campaigns?",
      answer:
        "We track SEO success using key performance indicators (KPIs), such as:\n• Organic Traffic: Increase in visitors from search engines\n• Keyword Rankings: Improvements in rankings for targeted keywords\n• Click-Through Rate (CTR): The percentage of users who click on search results\n• Conversion Rate: The percentage of visitors who complete desired actions\n• Conversions & ROI: The impact on leads, sales, or other business goals\nWe use tools like Google Analytics, Google Search Console, SEMrush, and others to monitor performance and provide detailed reports.",
    },
    {
      id: "item-3",
      question: "What is the difference between on-page and off-page SEO?",
      answer:
        "• On-Page SEO refers to optimization tactics on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the 'inside' of your online.\n• Off-Page SEO involves activities that influence your rankings, such as backlinks, social media signals, and brand mentions. This focuses on building your website's authority and trustworthiness from external sources.\nBoth are essential for a well-rounded SEO strategy.",
    },
    {
      id: "item-4",
      question: "Do you provide technical SEO audits?",
      answer:
        "Yes, technical SEO audits are a core part of our services to identify and resolve issues that may affect search rankings. Our audits include:\n• Website speed and performance analysis\n• Mobile-friendliness and Core Web Vitals assessment\n• Crawlability and indexability checks\n• Structured data and schema implementation\n• Fixing broken links, redirects, and duplicate content\n• Security issues (HTTPS, SSL certificates) and other technical factors essential for better search engine visibility",
    },
    {
      id: "item-5",
      question: "Do you offer content marketing services as part of your SEO packages?",
      answer:
        "Yes, content marketing is an essential part of our SEO strategy. We provide:\n• SEO-optimized blog writing to improve organic traffic\n• Website content optimization for better engagement and rankings\n• Content strategy development based on keyword research and user intent\n• Regular content updates to keep your website fresh and competitive\n• High-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.",
    },
    {
      id: "item-6",
      question: "What kind of reporting do you provide?",
      answer:
        "We provide detailed, transparent, and clear-driven reports, including:\n• Monthly performance reports with key metrics, rankings, and conversions\n• Google Analytics & Search Console insights\n• Backlink analysis and competitive comparisons\n• Recommendations for ongoing improvements\nOur reports ensure full understanding how your SEO strategy is progressing and where improvements can be made.",
    },
    {
      id: "item-7",
      question: "Do you offer SEO for E-commerce websites?",
      answer:
        "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:\n• Product page optimization for better rankings\n• Category page SEO and site structure improvements\n• Technical SEO for large inventories and dynamic content\n• Schema markup for rich snippets (e.g., product reviews, pricing)\n• Conversion rate optimization (CRO) for higher sales performance\nWe help your products get discovered by more buyers and improve the overall performance of your e-commerce businesses.",
    },
  ]

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen mt-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="flex justify-center space-x-8 text-sm text-gray-600 border-b border-gray-200 pb-4">
          <span className="border-b-2 border-blue-500 pb-1 font-medium">General FAQ</span>
          <span className="hover:text-gray-800 cursor-pointer">Dublin-Specific SEO FAQs</span>
          <span className="hover:text-gray-800 cursor-pointer">Pricing & Process FAQs</span>
          <span className="hover:text-gray-800 cursor-pointer">Company & Expertise FAQs</span>
        </div>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                  openItems.includes(faq.id) ? "transform rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-700 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastComponent
