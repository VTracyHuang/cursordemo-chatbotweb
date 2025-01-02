export default function MessageList() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {/* AI消息 */}
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
          🤖
        </div>
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <p className="text-gray-800 dark:text-gray-200">
            Hello! How can I help you today?
          </p>
        </div>
      </div>
      
      {/* 用户消息 */}
      <div className="flex items-start space-x-3 justify-end">
        <div className="flex-1 bg-purple-500 rounded-lg p-4 shadow-sm">
          <p className="text-white">
            Can you help me with some coding?
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          👤
        </div>
      </div>
    </div>
  )
} 