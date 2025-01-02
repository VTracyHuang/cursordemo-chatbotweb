export default function ChatInput() {
  return (
    <div className="relative">
      <textarea
        className="w-full px-4 py-3 pr-16 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 bg-white dark:bg-gray-800 resize-none"
        placeholder="Ask me anything..."
        rows={1}
      />
      <button className="absolute right-2 bottom-2 p-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors">
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
          />
        </svg>
      </button>
    </div>
  )
} 