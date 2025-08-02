import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react"

const SocialMedia = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-tight">
          Our Experience Extends Across All Social Media Channels,
          <br />
          Ensuring Your Complete Presence
        </h2>

        <div className="flex justify-center items-center gap-6">
          <a
            href="#"
            className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter className="w-6 h-6 text-gray-800 group-hover:text-blue-500" />
          </a>

          <a
            href="#"
            className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
          </a>

          <a
            href="#"
            className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 text-gray-800 group-hover:text-pink-500" />
          </a>

          <a
            href="#"
            className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Like us on Facebook"
          >
            <Facebook className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
