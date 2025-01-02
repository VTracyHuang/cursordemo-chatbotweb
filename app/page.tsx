import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
            AI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of AI conversation. Smart, intuitive, and designed for you.
          </p>
        </div>
        <ChatInterface />
      </div>
      <Footer />
    </main>
  )
}
