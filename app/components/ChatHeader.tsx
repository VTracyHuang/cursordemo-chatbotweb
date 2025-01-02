export default function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🤖</span>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            AI Assistant
          </h1>
        </div>
        <nav className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            New Chat
          </button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Settings
          </button>
        </nav>
      </div>
    </header>
  )
} 