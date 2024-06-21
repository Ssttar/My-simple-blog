import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <h2 className="text-4xl mb-4">关于我</h2>
      <p>这是关于页面。</p>
    </main>
    <Footer />
  </div>
)

export default About
