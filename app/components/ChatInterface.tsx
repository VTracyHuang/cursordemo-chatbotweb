'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Message } from '../types/chat'

const AIAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-[2px]">
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
        <svg 
          className="w-4 h-4 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  </div>
)

const UserAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 p-[2px]">
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
        <svg 
          className="w-4 h-4 text-gray-600" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  </div>
)

// 创建一个消息内容组件来处理 markdown
const MessageContent = ({ content }: { content: string }) => (
  <ReactMarkdown
    className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-gray-800 prose-pre:text-gray-100"
    remarkPlugins={[remarkGfm]}
    components={{
      code({ node, inline, className, children, ...props }: any) {
        return (
          <code
            className={`${className} ${
              inline 
                ? 'bg-gray-100 rounded px-1 py-0.5' 
                : 'block bg-gray-800 text-gray-100 rounded-lg p-4 my-2 overflow-x-auto'
            }`}
            {...props}
          >
            {children}
          </code>
        )
      },
      a({ children, ...props }: any) {
        return (
          <a
            className="text-blue-500 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        )
      },
      ul({ children, ...props }: any) {
        return (
          <ul className="list-disc list-inside my-2" {...props}>
            {children}
          </ul>
        )
      },
      ol({ children, ...props }: any) {
        return (
          <ol className="list-decimal list-inside my-2" {...props}>
            {children}
          </ol>
        )
      }
    }}
  >
    {content}
  </ReactMarkdown>
)

export default function ChatInterface() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! How can I help you today?'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isLoading) return

    const newMessage: Message = {
      role: 'user',
      content: message
    }

    setMessages(prev => [...prev, newMessage])
    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setMessages(prev => [...prev, data.message])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Chat error:', error)
      // 可以添加错误提示UI
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Chat Messages Area */}
      <div className="h-[500px] p-6 overflow-y-auto bg-gray-50">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && <AIAvatar />}
              <div 
                className={`${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' 
                    : 'bg-white text-gray-700'
                } ml-4 p-4 rounded-2xl shadow-sm max-w-[80%]`}
              >
                {msg.role === 'assistant' ? (
                  <MessageContent content={msg.content} />
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
              {msg.role === 'user' && <UserAvatar />}
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            <span>{isLoading ? 'Sending...' : 'Send'}</span>
            {!isLoading && (
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 