export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            Blog
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 AI Chat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 