'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [text, setText] = useState()
  const router = useRouter()

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="bg-green-600 min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 px-6 py-12 lg:px-16 lg:py-0">
        <div className="flex justify-center flex-col gap-6 text-center lg:text-left lg:ml-[10vw]">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-yellow-300">
            Everything you <br /> are in one <br /> simple link in bio
          </h2>
          <p className="text-lg sm:text-xl text-yellow-300 mb-6">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate, and sell from your Instagram, TikTok, Twitter, YouTube, and other social media profiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 w-full sm:w-[300px]"
              placeholder="linktree/your-url"
            />
            <button
              onClick={() => createTree()}
              className="bg-pink-300 text-gray-900 font-semibold px-6 py-3 sm:py-4 rounded-full mt-3 sm:mt-0 w-full sm:w-auto"
            >
              Claim Now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:mr-[10vw]">
          <img
            width={360}
            height={360}
            className="rounded-sm w-[80%] sm:w-[60%] md:w-[50%] lg:w-[60%] mx-auto"
            src="https://clpadvertising.com.au/wp-content/uploads/2022/11/1-576x1024.png"
            alt="home"
          />
        </div>
      </section>

      {/* Optional second section for additional content */}
      <section className="bg-red-700 min-h-[100vh] flex items-center justify-center text-center text-white py-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Your Journey Starts Here</h2>
        <p className="text-lg sm:text-xl mt-4">Start creating your Linktree today and expand your digital presence.</p>
      </section>
    </main>
  )
}

export default Page
