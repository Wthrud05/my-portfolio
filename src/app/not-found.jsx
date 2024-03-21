import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-full  flex flex-col items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-52 h-52">
          <Image src="/not-found.png" width={500} height={500} />
        </div>
        <h1 className="text-4xl font-bold text-black">Page not found</h1>
        <Link
          className="bg-black text-white text-lg px-5 py-3 rounded-lg hover:scale-110 active:scale-95 transition-all duration-200"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
