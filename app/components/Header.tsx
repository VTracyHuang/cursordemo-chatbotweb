export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            AI Chat
          </span>
        </div>
        {/* 暂时注释掉登录按钮
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        */}
      </nav>
    </header>
  )
} 